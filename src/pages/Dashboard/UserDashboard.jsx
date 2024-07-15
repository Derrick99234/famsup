import React, { useState } from "react";
import SideBar, { SidebarItem } from "../Dashboard/SideBar";
import NavBar from "../Dashboard/NavBar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart,
  LayoutDashboard,
  Settings,
  BarChart3,
} from "lucide-react";

function UserDashboard() {
  // const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="flex">

      <SideBar>
        <SidebarItem
          icon={ <LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active />
        <SidebarItem icon={<UserCircle size={20} />} text="Users" active />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" active />
        <SidebarItem icon={<Package size={20} />} text="Orders" active />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" active />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" active />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" active />
      </SideBar>
    </div>
  );
}

export default UserDashboard;
