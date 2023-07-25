import {
	GetInTouch,
	OfficeAddress,
	PageHeader,
	SendMessage,
} from "../components";

const Contact = () => {
	return (
		<>
			<PageHeader title={"Our Contact"} location={"Contact"} />
			<GetInTouch />
			<SendMessage />
			<OfficeAddress />
		</>
	);
};

export default Contact;
