import {
  NavigationMenu,
  NavigationMenuContent,
  //   NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <>
      <div className="bg-teal-100 flex justify-between items-center py-2">
        <div>Logo</div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>FB</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>IG</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
