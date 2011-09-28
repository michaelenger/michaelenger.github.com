-- Keyboard Movement
-- Move the image around using the keyboard.

function love.load()
	image = love.graphics.newImage("logo.png")
	x = 100 -- from top left
	y = 100
end

function love.draw()
	love.graphics.draw(image, x, y)
end

-- Called when a keyboard key is pressed (not to be confused with keyreleased)
function love.keypressed(key)
	-- No switch in Lua :(
	if key == "left" then
		x = x - 10
	elseif key == "right" then
		x = x + 10
	elseif key == "up" then
		y = y - 10
	elseif key == "down" then
		y = y + 10
	end
end
