import React from "react";
import NavBar from "../Dashboard/NavBar";
import SideBar, { SidebarItem } from "../Dashboard/SideBar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  LayoutDashboard,
  Settings,
  BarChart3,
} from "lucide-react";

function UserDashboard() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1">
        <SideBar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            alert
          />
          <SidebarItem
            icon={<BarChart3 size={20} />}
            text="Statistics"
            active
          />
          <SidebarItem icon={<UserCircle size={20} />} text="Users" active />
          <SidebarItem icon={<Boxes size={20} />} text="Inventory" active />
          <SidebarItem icon={<Package size={20} />} text="Orders" active />
          <SidebarItem icon={<Receipt size={20} />} text="Billings" active />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" active />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" active />
        </SideBar>
        <main className="flex-1 p-4">
          {" "}
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;
