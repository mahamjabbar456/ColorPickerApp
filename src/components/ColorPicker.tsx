'use client';

import { ChangeEvent, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ColorPicker = () => {
  const [color,setColor] = useState<string>("#000000");

  const handleColorChange = (e:ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }

  const copyClipboard = () => {
    navigator.clipboard.writeText(color);
    alert("Copy Successfully!");
  }

  return (
    <div className="flex justify-center items-center h-screen" style={{backgroundColor:color}}>
      <Card className="shadow-lg rounded-2xl max-w-md w-full m-5">
        <CardHeader className="text-center">
           <CardTitle>Color Picker</CardTitle>
           <CardDescription>Select a color and copy the hex and RGB values.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid gap-4">
            <div className="w-full h-48 rounded-xl border-4 border-gray-300" style={{backgroundColor:color}}>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 ">
            <div className="text-3xl font-bold">{color}</div>
            <div className="text-gray-500">RGB:
              {parseInt(color.slice(1,3),16)},{" "}
              {parseInt(color.slice(3,5),16)},{" "}
              {parseInt(color.slice(5,7),16)}
            </div>
            <Button
            className="w-full rounded-2xl font-bold bg-gray-950 hover:bg-gray-900"
            onClick={copyClipboard}
            >
              Copy to Clipboard
            </Button>
            </div>
            <Input
            type="color"
            value={color}
            className="border-none h-16 w-full p-0 rounded-xl"
            onChange={handleColorChange}
            />
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ColorPicker
