"use client";

import { AppSidebar } from "@/components/layout/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ParameterizedIcon } from "@/components/ui/parameterized-icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useLayout from "./_hooks/useLayout";

const Layout = ({ children }: React.PropsWithChildren) => {
  const { currentTheme, currentLanguage, setCookieLocale, onChangeTheme } =
    useLayout();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="px-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                <DropdownMenuItem className="gap-2 h-11 cursor-pointer">
                  <ParameterizedIcon name="User" size={20} />
                  <span>개인정보</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 h-11 cursor-pointer">
                  <ParameterizedIcon name="Bell" size={20} />
                  <span>알림설정</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 h-11 cursor-pointer">
                  <ParameterizedIcon name="LogOut" size={20} />
                  <span>로그아웃</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <ParameterizedIcon name="Languages" size={20} />
                    <span>언어설정</span>
                  </div>
                  <div className="w-24">
                    {/* <BaseSelect
                    value={currentLanguage}
                    size={'small'}
                    option={languageOption}
                    onChange={value => {
                      onChangeLanguage(value as string)
                    }}
                  /> */}
                    <Select
                      value={currentLanguage}
                      onValueChange={(language) => {
                        setCookieLocale(language as string);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="언어" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="ko">한국어</SelectItem>
                          <SelectItem value="en">영어</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-between h-11">
                  <div className="flex items-center gap-2">
                    <ParameterizedIcon name="Sun" size={20} />
                    <span>테마설정</span>
                  </div>
                  <Tabs
                    value={currentTheme ?? "light"}
                    className="w-24"
                    onClick={(e) => e.stopPropagation()}
                    onValueChange={(e) => {
                      onChangeTheme(e);
                    }}
                  >
                    <TabsList className="grid w-full grid-cols-2 bg-muted text-static-black">
                      <TabsTrigger value="light">Light</TabsTrigger>
                      <TabsTrigger value="dark">Dark</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
        <ScrollArea className="h-[calc(100dvh-64px)] min-w-[700px] overflow-auto bg-background-normal p-4">
          {children}
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
