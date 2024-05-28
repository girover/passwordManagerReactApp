import BtnIcon from "../../components/buttons/BtnIcon";
import BtnPrimary from "../../components/buttons/BtnPrimary";
import Card from "../../components/cards/Card";
import FormInput from "../../components/forms/FormInput";
import NavItem from "../../components/navbarNav/NavItem";

const Account = () => {
    return (
        <div className="row p-2">
            <h1 className="col-12 col-lg-6 fs-4">Change master password</h1>
            <div className="col-12 col-lg-6">
                <div className="input-group mb-3">
                    <BtnIcon ariaLabel={`undo`} text="undo" icons={['fa fa-rotate-left']} classes="btn-primary bg-blue-600" />
                    <BtnIcon ariaLabel={`do`} text="do" icons={['fa fa-rotate-right']} classes="btn-primary bg-blue-600" />
                </div>
            </div>
            <div className="col-12 col-md-6 p-2">
                <Card classes="h-100" title="Create a new dynamic password" icons={["fa fa-key"]}>
                </Card>
            </div>
            <div className="col-12 col-md-6 p-2">
                <Card classes="h-100" title="Functions" icons={["fa fa-vial"]}>
                    <ul className="navbar-nav justify-content-start flex-grow-1">
                        <NavItem icons={["fa fa-plus"]} text="Addition" />
                        <NavItem icons={["fa fa-minus"]} text="Subtraction" />
                        <NavItem icons={["fa fa-times"]} text="Multiplication" />
                        <NavItem icons={["fa-regular fa-square-full"]} text="Absolute Value" />
                        <NavItem icons={["fa fa-superscript"]} text="Exponentiation" />
                        <NavItem icons={["fa fa-square-root-variable"]} text="Square Root" />
                    </ul>
                </Card>
            </div>
            <div className="col-12 p-2">
                <Card title="Data" icons={["fill-drip"]}>
                    <ul className="navbar-nav justify-content-start d-flex flex-row">
                        <NavItem icons={['fa fa-calendar-days']} text="Date" classes="me-1" />
                        <NavItem icons={['fa fa-layer-group']} text="Stock" classes="me-1" />
                        <NavItem icons={['fa fa-cloud']} text="Weather" classes="me-1" />
                    </ul>
                </Card>
            </div>
            <div className="col-12 col-md-6 p-2">
                <Card title="New Password" icons={["fa fa-fill-drip"]}>
                    <form>
                        <FormInput id="password" name="password" label="Please type your password here" />
                    </form>
                </Card>
            </div>
            <div className="col-12 col-md-6 p-2">
                <Card title="Save Created Password" icons={["fa fa-save"]}>
                    <BtnPrimary text="Save" icons={['fa fa-save']} classes="bg-blue-900" />
                </Card>
            </div>
        </div>
    );
}

export default Account;