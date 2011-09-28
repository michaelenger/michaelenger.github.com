-- (Basic) Collision Detection
-- Prevent the image from going out of the window.

function love.load()
	image = love.graphics.newImage("logo.png")
	x = 100
	y = 100
end

function love.draw()
	love.graphics.draw(image, x, y)
end

function love.update(dt)
	local target = love.mouse.getX() - (image:getWidth() / 2)
	local diff = target - x
	x = x + (diff * dt)

	target = love.mouse.getY() - (image:getHeight() / 2)
	diff = target - y
	y = y + (diff * dt)
	
	if x < 0 then
		x = 0 -- image starts at top left
	elseif x + image:getWidth() > love.graphics.getWidth() then
		x = love.graphics.getWidth() - image:getWidth()
	end
end
