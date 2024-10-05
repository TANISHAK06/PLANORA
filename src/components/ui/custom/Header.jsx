import React from "react";
import { Button } from "@/components/ui/button";
function Header() {
  return (
    <div className="p-4 flex justify-between items-centre px-6">
      <img src="/logo.ico" className="size-16"></img>
      <div>
        <Button> Sign In </Button>
      </div>
    </div>
  );
}

export default Header;
