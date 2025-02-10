
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container py-6 animate-fadeIn">
            <SidebarTrigger className="lg:hidden mb-4" />
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
