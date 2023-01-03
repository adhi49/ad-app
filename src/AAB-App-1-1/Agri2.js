
const Agri2 = () => {
    return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Home
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Items</a>
                        <a class="dropdown-item" href="#">sales</a>
                        <a class="dropdown-item" href="#">purchase</a>
                        <a class="dropdown-item" href="#">Expense</a>
                        <a class="dropdown-item" href="#">Other product</a>
                    </div>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Malanad Agro Store <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Malanad Agro Service</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Malanad Fertilizer's Dippo</a>
                </li>
                <nav class="navbar navbar-dark bg-primary">
                    <form class="form-inline">
                        <input type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </ul>
        </div>
    </nav>
    )
}
export default Agri2;