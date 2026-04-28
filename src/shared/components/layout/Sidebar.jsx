<<<<<<< Updated upstream
import { Link } from "react-router-dom";

=======
import { Link, useLocation } from "react-router-dom";
 
>>>>>>> Stashed changes
export const Sidebar = () => {
    const location = useLocation();
 
    const items = [
        { label: "Canchas", to: "/dashboard/fields" },
        { label: "Reservaciones", to: "/dashboard/reservations" },
        { label: "Equipos", to: "/dashboard/teams" },
        { label: "Torneos", to: "/dashboard/tournaments" },
        { label: "Usuarios", to: "/dashboard/users" },
    ];
 
    return (
        <aside className="w-60 bg-white min-h-[calc(100vh-4rem)] p-4 shadow-sm">
            <ul className="space-y-1">
<<<<<<< Updated upstream
                {items.map((item) => (
                    <li key={item.label}>
                        <Link to={item.to} className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">
                            {item.label}
                        </Link>
                    </li>
                ))}
=======
                {items.map((item) => {
 
                    const active = useLocation().pathname === item.to;                    
 
                    return (
                        <li key={item.label}>
                            <Link to={item.to} className={`block px-4 py-2 rounded-lg font-medium transition-colors sidebar-underline${active ? " active text-main-blue" : " text-gray-700 hover:bg-gray-100"}`}
                                style={active ? { fontWeight: 700 } : {}}>
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
>>>>>>> Stashed changes
            </ul>
        </aside>
    );
};