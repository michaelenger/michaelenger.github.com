-- Mouse Movement
-- Move the image to where the mouse pointer is.

function love.load()
	image = love.graphics.newImage("logo.png")
	x = 100
	y = 100
	
	-- Uncomment this to hide the mouse
	--love.mouse.setVisible(false)
end

function love.draw()
	love.graphics.draw(image, x, y)
end

function love.update(dt)
	x = love.mouse.getX() - (image:getWidth() / 2)
	y = love.mouse.getY() - (image:getHeight() / 2)
end
