-- Hello LÖVE
-- Print out the text "Hello LOVE!" (no umlaut because of encoding)

-- The draw part of the main loop
function love.draw()
	-- Print text on the screen: text, x-coordinate, y-coordinate
	love.graphics.print("Hello LOVE!", 10, 10)
end
