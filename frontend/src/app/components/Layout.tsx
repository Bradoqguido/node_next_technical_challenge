import Players from "@/app/components/Player";
import Games from "@/app/components/Games";
import GameTeams from "@/app/components/GameTeams";

const Layout = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ flex: 1, margin: '0 10px' }}>
                <Players />
            </div>
            <div style={{ flex: 1, margin: '0 10px' }}>
                <Games />
            </div>
            <div style={{ flex: 1, margin: '0 10px' }}>
                <GameTeams />
            </div>
        </div>
    );
};
export default Layout;
