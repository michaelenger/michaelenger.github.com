-- Load an Image
-- Load an image into memory and then draw it on the screen.

-- This is where loading is done, this is called ONCE at the start of the game.
function love.load()
	-- Create an Image object from a file
	image = love.graphics.newImage("logo.png")
	
	-- Coordinates
	x = 100 -- from top left
	y = 100
end

function love.draw()
	-- Draw a drawable object: object, x-coordinate, y-coordinate
	love.graphics.draw(image, x, y)
end