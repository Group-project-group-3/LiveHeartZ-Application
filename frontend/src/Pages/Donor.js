import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './Donor.css';
function Donor(){
    return(
        <div>
            <Header></Header>
    <div class="table-container">
    <table class="custom-table" border="1px">
        <thead>
            <tr>
                <th class="id">ID</th>
                <th class="name">Name</th>
                <th class="status">Status</th>
            </tr>

            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Status</td>
            </tr>

            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </thead>
    </table>
    </div>
    <Footer></Footer>
    </div>
    );
}
export default Donor;