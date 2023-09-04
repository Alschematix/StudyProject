import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toggle } from "@/components/Toggle";
import { MainNav } from "@/components/ui/main-nav";
import {UserNav} from "@/components/ui/user-nav";
import Spacer from "@/components/Spacer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });



  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className="flex flex-col items-center min-h-screen bg-background">
        
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {user ? <UserNav image ={"/../stockuser.jpg"} user={user?.email || ''} />: <MainNav />}
            <Spacer height={14} />
            {children}
          </ThemeProvider>
        
      </body>
    </html>
  );
}
