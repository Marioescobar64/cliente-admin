import { Link } from "react-router-dom";

export const Sidebar = () => {
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
                {items.map((item) => (
                    <li key={item.label}>
                        <Link to={item.to} className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};