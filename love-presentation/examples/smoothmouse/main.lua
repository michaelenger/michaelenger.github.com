-- Smooth Mouse Movement
-- Beware the smooth (mouse) criminal.

function love.load()
	image = love.graphics.newImage("logo.png")
	x = 100
	y = 100
end

function love.draw()
	love.graphics.draw(image, x, y)
end

function love.update(dt)
	-- Local variables exist inside this block only
	local target = love.mouse.getX() - (image:getWidth() / 2)
	local diff = target - x
	x = x + (diff * dt)

	target = love.mouse.getY() - (image:getHeight() / 2)
	diff = target - y
	y = y + (diff * dt)
end
