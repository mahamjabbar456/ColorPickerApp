'use client'; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState,ChangeEvent } from "react";

// Import custom UI components from the UI directory
import { Card,CardTitle,CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ColorPicker = () => {
      // State hook for managing the selected color
    const [color,setColor] = useState<string>("#000000");

    const handleColorChange = (e : ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }
      // Function to copy the color value to the clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(color); // Write the color value to the clipboard
        alert("Copy Successfully!"); // Alert the user that the color was copied
    }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        {/* Center the color picker card within the screen */}
      <Card className="p-8 w-full max-w-md grid gap-8">
        {/* Header with title and description */}
        <div className="text-center space-y-2">
            <CardTitle className="text-[18px]">Color Picker</CardTitle>
            <CardDescription>
                Select a color and copy the hex and RGB values.
            </CardDescription>
        </div>
        {/* Main content area for color display and input */}
        <div className="grid gap-4">
            {/* Display the selected color */}
            <div className="w-full h-48 rounded-lg border-4 border-gray-200 text-3xl text-white flex justify-center items-center"
            style={{backgroundColor:color}}
            >
            {color}
            </div>
            {/* Display the color value in hex and RGB format, and button to copy */}
            <div className="grid gap-2 text-center">
                <div className="text-3xl font-bold">{color}</div>
                <div className="text-gray-400">
                    RGB : {parseInt(color.slice(1,3),16)},{" "}
                    {parseInt(color.slice(3,5),16)},{" "}
                    {parseInt(color.slice(5,7),16)}
                </div>
                <Button
                onClick={copyToClipboard}
                className="font-bold rounded-2xl w-full"
                >
                    Copy to Clipboard
                </Button>
            </div>
            {/* Input field to pick a color */}
            <Input 
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full p-0 h-16 border-0 rounded-lg cursor-pointer"
            />
        </div>
      </Card>
    </div>
  )
}

export default ColorPicker
