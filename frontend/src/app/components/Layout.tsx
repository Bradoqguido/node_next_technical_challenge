import Players from './Players';
import Games from './Games';
import Teams from './Teams';

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
                <Teams />
            </div>
        </div>
    );
};

export default Layout;
