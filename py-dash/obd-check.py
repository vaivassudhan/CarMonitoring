import obd

speed = 0
rpm = 0
load = 0


def get_speed(s):
	global speed
	if not s.is_null():
		speed = int(s.value.magnitude) #for kph
		# speed = int(s.value.magnitude * .060934) #for mph
def get_rpm(r):
	global rpm
	if not r.is_null():
		rpm = int(r.value.mangitude)
def get_load(l):
	global load
	if not l.is_null():
		load = int(l.value.mangitude)
connection.watch(obd.commands.SPEED, callback=get_speed)
connection.watch(obd.commands.RPM, callback=get_rpm)
connection.watch(obd.commands.ENGINE_LOAD, callback=get_load)
connection.start()
running = True
while running:
	for event in pygame.event.get():
		if event.type == KEYDOWN:
			if event.key == K_ESCAPE:
				connection.stop()
				connection.close()
				running = False
			elif event.type == QUIT:
				connection.stop()
				connection.close()
				running = False
	draw_hud()
	speedDisplay = digitFont.render(str(speed), 3, white)
	rpmDisplay = digitFont.render(str(rpm), 3, white)
	loadDisplay = digitFont.render(" " + str(load) + " %", 3, white)
	screen.blit(loadDisplay, (circle3_x-(circle3_x/8), circle_y-45))
	screen.blit(rpmDisplay, (circle2_x-(circle2_x/8), circle_y-45))
	screen.blit(speedDisplay,(circle1_x-(circle1_x/8), circle_y-45))
	pygame.display.update()
	pygame.display.flip()