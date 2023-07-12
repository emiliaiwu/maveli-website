import { ourTeam } from "../constants";
import { Heading, H2Header, InfoTextCenter } from "./Texts";
import { TeamsBox } from "./Box";
import { styles } from "../style";

const Teams = () => {
	const { heading, title, paragraph, teamsInfo } = ourTeam;

	return (
		<section>
			<div
				className={`${styles.boxWidth} mx-auto ${styles.flexCenter} flex-col gap-4`}
			>
				<div className='flex max-w-[500px] flex-col items-center justify-center gap-5 text-center md:max-w-[600px]'>
					<Heading text={heading} />
					<H2Header text={title} />
					<InfoTextCenter text={paragraph} />
				</div>

				<div className='grid grid-cols-1 gap-5 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
					{teamsInfo.map((team) => (
						<TeamsBox
							key={team.id}
							socials={team.socials}
							image={team.image}
							teamMemberName={team.name}
							teamMemberPosition={team.position}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Teams;
