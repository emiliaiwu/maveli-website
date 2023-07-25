import { Heading, InfoTextCenter, H2Header } from "../Texts";
import { sendMessageData } from "../../constants";
import SendMessageForm from "./SendMessageForm";
import Reveal from "../animation/Reveal";

const SendMessage = () => {
	const { heading, title, paragraph } = sendMessageData;

	return (
		<section>
			<div className='mx-auto w-full max-w-[900px]'>
				<div className='mx-auto mb-12 flex max-w-[600px] flex-col items-center justify-center gap-5 text-center'>
					<Reveal>
						<Heading text={heading} />
					</Reveal>
					<Reveal>
						<H2Header text={title} />
					</Reveal>
					<Reveal>
						<InfoTextCenter text={paragraph} />
					</Reveal>
				</div>
				<div>
					<Reveal>
						<SendMessageForm />
					</Reveal>
				</div>
			</div>
		</section>
	);
};

export default SendMessage;
