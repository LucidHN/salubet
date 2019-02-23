import React from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
    // <Link to='/registerPatients'></Link>
    // <Link to='/home'></Link>
    // {this.props.children}
    state = {
        sidebar: 'unactive'
    }


    handleToggle() {
        this.setState({ sidebar: 'active' }, () => {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');
        });

    }
    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Dr. Matamoros</h3>
                    </div>
                    <ul className="list-unstyled components bar">
                        <p className="bar">San Felipe</p>
                        <li className="active bar">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle bar">Home</a>
                            <ul className="collapse list-unstyled bar" id="homeSubmenu">
                                <li className="bar">
                                    <a className="bar" href="#">Home 1</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Home 2</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">About</a>
                        </li>
                        <li className="bar">
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle bar">Pages</a>
                            <ul className="collapse list-unstyled bar" id="pageSubmenu">
                                <li className="bar">
                                    <a className="bar" href="#">Page 1</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Page 2</a>
                                </li>
                                <li className="bar">
                                    <a className="bar" href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Portfolio</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div id="content" className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-white-background">
                        <div className="container-fluid">

                            <button onClick={this.handleToggle.bind(this)} type="button" id="sidebarCollapse" className="btn btn-info">
                                <span>Toggle Sidebar</span>
                            </button>
                            

                        </div>
                    </nav>
                    <p>Enim non dolore nisi aliquip enim et pariatur deserunt ex. Dolor nulla deserunt Lorem amet proident labore culpa non. Et proident dolore ad culpa consectetur velit officia eiusmod.

In nisi exercitation amet ipsum consequat officia deserunt ex. Mollit incididunt anim anim mollit pariatur laboris quis pariatur. Laborum reprehenderit ad incididunt consectetur voluptate laboris ut consectetur nisi aliquip magna pariatur laboris cillum. Consequat non voluptate amet irure amet.

Excepteur adipisicing elit dolor ut officia velit labore aliqua eu enim officia. Officia anim nostrud commodo occaecat. Labore eiusmod nostrud dolor duis amet ut excepteur. Occaecat nisi irure eiusmod quis commodo culpa officia tempor dolor nostrud do ea. Aute nulla duis do aute. Tempor nulla proident est esse culpa est proident deserunt. Excepteur officia reprehenderit et cillum nisi ut dolor aliqua laboris proident.

Cillum nostrud culpa ipsum sunt aliqua ad est amet ex. Minim ex aliqua nisi et officia elit duis labore consectetur consectetur anim. Proident irure nostrud incididunt qui sunt Lorem quis reprehenderit do pariatur commodo voluptate aliqua ipsum.

Proident cillum elit fugiat labore laboris proident cillum cillum duis nulla occaecat esse cupidatat. Excepteur in pariatur officia Lorem. Do voluptate sunt officia anim labore voluptate. Commodo ea amet velit proident.

Mollit aute eiusmod labore labore velit ullamco laborum do do dolore nisi. Excepteur labore irure velit duis aliquip consequat mollit proident ea ea aliquip magna. Laborum incididunt laborum aute elit ad. Aliquip eiusmod elit laborum sunt ut consequat qui. Dolore elit incididunt proident minim velit ullamco nostrud sint.

Dolore in occaecat quis dolore nulla culpa anim excepteur. Tempor cillum proident in officia eu elit. Laboris ut est velit do aliqua enim magna. Eu voluptate enim qui ullamco do pariatur cupidatat. Fugiat eu ad aliquip ad dolor anim adipisicing aute qui est dolor elit adipisicing deserunt.

Amet sit irure cillum sunt eiusmod dolore dolor cillum esse labore reprehenderit in aliquip. Mollit sit dolore id exercitation officia exercitation et ullamco labore excepteur nostrud. Qui ipsum adipisicing et officia.

Proident quis mollit commodo consectetur occaecat irure nostrud nulla cupidatat qui laborum amet cillum et. Qui tempor eu et ipsum culpa ad sunt laboris. Culpa enim cillum do consequat. Minim veniam adipisicing occaecat proident officia enim pariatur pariatur cillum elit cupidatat deserunt enim.

Commodo est nulla irure cupidatat in eu mollit mollit ad. Aliqua consequat tempor deserunt eu sit id id nostrud exercitation quis ipsum elit cillum. Adipisicing commodo eu ex adipisicing deserunt proident cillum nulla laborum nulla esse dolore deserunt deserunt. Duis ut eu Lorem ex et Lorem sit enim culpa. Nisi elit cillum laborum mollit reprehenderit labore minim ipsum fugiat ut elit. Enim quis sunt enim aliquip enim nostrud proident excepteur proident esse eu. Ullamco ullamco duis exercitation consequat ipsum commodo aute minim culpa officia aliqua pariatur eiusmod fugiat. Voluptate excepteur aliquip adipisicing eiusmod tempor quis eiusmod minim commodo non labore labore. Id et laborum culpa aliquip labore duis est.

Consectetur esse consequat nostrud nulla consequat quis. Ut eu aliquip ex ut sint in consequat adipisicing duis sint amet esse. Sunt proident laborum consectetur non.

Aliquip minim excepteur cillum ea amet et eu fugiat nulla velit do tempor. Labore et sunt non ullamco officia commodo occaecat. Deserunt proident exercitation officia voluptate eu ad incididunt occaecat in laboris aliquip nulla sint. Esse ullamco irure duis ad mollit velit esse.

Culpa id ea consequat excepteur non dolor. Ipsum sint consequat irure in cupidatat aute anim amet ad deserunt quis. Adipisicing et incididunt velit duis est laborum mollit.

Deserunt Lorem laboris duis cupidatat sit consectetur exercitation elit id aliqua reprehenderit nulla Lorem. Sunt fugiat ad officia ullamco pariatur aliquip aliquip. Sit et voluptate do eu et deserunt consequat irure incididunt reprehenderit.

Quis aliquip nulla officia fugiat nostrud veniam nulla nulla. Culpa deserunt sit enim sunt sit proident. Nisi dolor amet fugiat ad consequat esse consectetur magna culpa aliquip excepteur laboris. Consectetur consequat esse mollit ipsum minim labore consectetur non aute exercitation voluptate. Culpa voluptate quis in ex tempor eu anim qui do consectetur minim dolore.

Ea cillum irure quis amet anim. Ex occaecat sint Lorem cillum aute. Culpa id velit sit mollit nostrud. Ipsum fugiat sunt non cupidatat Lorem sint qui elit elit. Labore labore nulla magna tempor magna ex duis mollit consectetur Lorem sint duis proident aliquip. Reprehenderit tempor ipsum ipsum dolor.

Sunt esse adipisicing labore do dolor et culpa ad velit. Laborum consequat est nulla nulla officia. Deserunt eu Lorem adipisicing reprehenderit consectetur ad non. Sunt cillum incididunt amet cupidatat aliqua culpa Lorem.

Commodo aute labore deserunt consectetur ad mollit voluptate exercitation qui. Mollit officia aute qui amet laborum minim id nisi eu eu aliqua. Tempor cillum anim ullamco irure ea voluptate adipisicing ex do quis adipisicing id. Dolor aliqua excepteur magna ullamco consectetur ipsum minim culpa exercitation sunt id aliqua in. Aliquip ipsum irure labore in voluptate labore nulla.

Sunt nostrud labore minim nulla pariatur ut laborum. Consectetur ad Lorem aliqua irure culpa cillum nostrud excepteur reprehenderit duis. Voluptate do dolore laborum amet. Ad aliquip laboris laborum qui Lorem magna culpa ipsum qui reprehenderit.</p>
                </div>

            </div>
        );
    }
}