import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavigationMenu, NavigationMenuContent, 
//   NavigationMenuIndicator,
NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
//   NavigationMenuViewport,
 } from "@/components/ui/navigation-menu";
const Navbar = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "bg-teal-100 flex justify-between items-center py-2", children: [_jsx("div", { children: "Logo" }), _jsx(NavigationMenu, { children: _jsxs(NavigationMenuList, { children: [_jsxs(NavigationMenuItem, { children: [_jsx(NavigationMenuTrigger, { children: "Home" }), _jsx(NavigationMenuContent, { children: _jsx(NavigationMenuLink, { children: "Link" }) })] }), _jsxs(NavigationMenuItem, { children: [_jsx(NavigationMenuTrigger, { children: "Product" }), _jsx(NavigationMenuContent, { children: _jsx(NavigationMenuLink, { children: "Link" }) })] }), _jsxs(NavigationMenuItem, { children: [_jsx(NavigationMenuTrigger, { children: "Contact" }), _jsx(NavigationMenuContent, { children: _jsx(NavigationMenuLink, { children: "Link" }) })] }), _jsxs(NavigationMenuItem, { children: [_jsx(NavigationMenuTrigger, { children: "FB" }), _jsx(NavigationMenuContent, { children: _jsx(NavigationMenuLink, { children: "Link" }) })] }), _jsxs(NavigationMenuItem, { children: [_jsx(NavigationMenuTrigger, { children: "IG" }), _jsx(NavigationMenuContent, { children: _jsx(NavigationMenuLink, { children: "Link" }) })] })] }) })] }) }));
};
export default Navbar;
