import Nav from '../components/nav'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>ZtM Workouts</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css"/>
        </Head>
        <Nav />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;