import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Unorderedlist from "react-native-unordered-list";
import { Button } from "react-native-elements";

export default function ProducerScreen() {
	return (
		<View>
			<View>
				<Image
					style={{
						width: "100%",
					}}
					source={require("../assets/Clementine.jpeg")}
				/>
				<Text>Domaine de la Taste</Text>
				<Text>Clémentines Fines de Corse BIO</Text>
				<Text>
					Vous arrivez pile au bon moment! Réservez vos clémentines avant que
					toutes les unités ne soient épuisées.
				</Text>
				<Button title="Acheter"></Button>
			</View>
			<View>
				<Text>Unités Restantes: +100</Text>
				<Text>Jours Restants: 89</Text>
				<Text>Prochain Envoi: 12/11/2022</Text>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: "column",
				}}
			>
				<ScrollView>
					<View>
						<Text>Qu'achetez-vous concrètement?</Text>
						<Text>
							Vous parrainez un clémentinier que nous produisons dans notre
							domaine à Tallone (France). La culture est certifiée par le label
							Agriculture biologique de l'Union Européenne depuis 2008. Pendant
							le processus d'achat, vous pourrez choisir le nom avec lequel nous
							identifierons votre clémentinier. Les clémentiniers de notre
							verger produisent des clémentines BIO de la variété “Fine de
							Corse”, qui est l’une des premières variétés à avoir été plantées
							en Corse et l’une des mieux adaptées au climat de l’île de beauté.
							Le clémentinier, ou Citrus clementina, est issu du croisement d’un
							mandarinier et d’une variété de bigaradier à feuille de saule. Il
							est né au début du XXe siècle en Algérie, grâce aux soins d’un
							religieux spiritain, le frère Clément qui lui a donné son nom. Les
							clémentiniers ont une production saisonnière, généralement de
							début novembre à début janvier, mais cela peut varier en fonction
							des années et du climat. Le clémentinier est l’un des rares
							agrumes aux fruits sans pépins. Il s’agit d’un hybride
							auto-incompatible, autrement dit stérile. La multiplication des
							clémentiniers se fait donc essentiellement par greffage.
							L’obtention de nouvelles variétés est permise par des mutations
							naturelles ou par une fécondation croisée avec un autre agrume, ce
							qui donnera des clémentines à pépins. Les premiers clémentiniers
							ont été plantés en Corse en 1925 par Don Philippe Semidei à
							Figaretto, sur la plaine Est de l’île. Aujourd’hui, 98 % des
							clémentines françaises sont produites en Corse orientale. La
							clémentine de Corse se distingue des autres clémentines par son
							Indication Géographique Protégée (IGP) obtenue en 2007. L’IGP est
							un signe officiel de qualité européen qui garantit un lien entre
							le produit et son territoire aux stades de la production, du
							conditionnement et de la transformation. Reposant sur un cahier
							des charges très strict, ce signe distingue l’excellence d’un
							produit, dont toutes les phases d’élaboration sont issues de son
							terroir d’origine, et des savoir-faire spécifiques de la filière,
							le produit bénéficiant ainsi d’une notoriété reconnue à travers le
							monde entier. Située entre mer et montagne au sein de la plaine
							orientale de la Haute Corse, notre exploitation bénéficie de
							conditions climatiques exceptionnelles : un climat tempéré ainsi
							qu´une pluviométrie et une hygrométrie plus élevées que dans les
							autres régions de productions méditerranéennes. Nos clémentiniers
							sont cultivés conformément à la réglementation de l'Union
							européenne sur l'agriculture biologique. Notre autorité de
							contrôle est Ecocert. Nous travaillons également avec la
							certification Global G.A.P afin de garantir la sécurité
							alimentaire et le développement durable sur l’exploitation. Votre
							adoption a 56 ans et la durée de vie de production est d'environ
							125 ans. Tant que vous le souhaitez et que nous pouvons nous en
							occuper, vous pourrez prolonger votre adoption d'année en année.
							Si votre adoption meurt, nous veillerons à ce que vous obteniez la
							récolte d'autres sans frais supplémentaires. Votre clémentinier
							produit en moyenne 30 kg de clémentines de Corse IPG BIO par
							saison. Vous n'êtes pas obligé de consommer la totalité de la
							récolte. Chaque saison, vous pouvez décider de la quantité à
							réserver et payer l'entretien en fonction du montant réservé : de
							cette façon, vous ne paierez que ce que vous consommez, et nous
							pouvons planifier ainsi que vendre le reste de la récolte à
							d'autres.
						</Text>
					</View>
					<View>
						<Text>Que recevez-vous?</Text>
						<Text>
							Vous pourrez recevoir la quantité de récolte que vous aviez
							réservée au moment du parainage tout au long de la saison. Vous
							recevrez un minimum de 2 caisses, que vous pourrez augmenter
							jusqu'à 6 caisses selon vos besoins.
						</Text>
						<Text>Format d'expédition : Caisse de 5 kg de clémentines BIO</Text>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								“Fine de Corse” IGP : clémentine de petite taille, sans pépins,
								facile à éplucher et à déguster ; la fraîcheur de cette
								clémentine et sa saveur légèrement acidulée en font un fruit
								gouteux et attractif
							</Text>
						</Unorderedlist>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								Cueillis manuellement au sécateur, au moins 20 % des fruits
								conservent une à deux feuilles
							</Text>
						</Unorderedlist>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								Agriculture Biologique certifiée par le label européen de
								l'Agriculture Biologique depuis 2008
							</Text>
						</Unorderedlist>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								Aucune trace de cire ni de traitement de conservation (la peau
								peut être utilisée pour cuisiner)
							</Text>
						</Unorderedlist>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								Certains fruits peuvent avoir le “cul-vert”, cette spécificité
								de la clémentine Bio de Corse n’est en aucun cas un manque de
								maturité car c’est le froid qui donne une pigmentation orange à
								sa peau
							</Text>
						</Unorderedlist>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								Nous ne stockons pas les fruits dans des chambres froides ; ils
								sont cueillis sur l'arbre et expédiés directement à votre
								domicile dans une caisse en carton sans plastique
							</Text>
						</Unorderedlist>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								La caisse contient des fruits supplémentaires, au cas où
								certains fruits auraient été endommagés
							</Text>
						</Unorderedlist>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								Nous travaillons avec la nature ; c'est pourquoi chaque fruit
								est unique en apparence et en taille (comme vous)
							</Text>
						</Unorderedlist>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								Un kilo représente environ 20-22 fruits (la caisse que vous
								recevrez, contiendra entre 90 et 110 fruits, en fonction de leur
								taille)
							</Text>
						</Unorderedlist>
						<Unorderedlist bulletUnicode={0x29bf} color="#0EA888">
							<Text>
								Mode de conservation : en les conservant dans un endroit frais
								et aéré, les fruits peuvent tenir 15 jours (si vous voulez les
								garder plus longtemps, vous pouvez les conserver au
								réfrigérateur)
							</Text>
						</Unorderedlist>
					</View>
					<View>
						<Text>Pourquoi Parrainer?</Text>
						<Text>
							Découvrez par qui, comment et où sont produits vos aliments.
							Procurez-vous vos aliments de manière consciente et responsable.
						</Text>
						<Text>
							Acheter directement au producteur lui permet d'obtenir un prix
							plus juste. Cela contribue à générer de meilleurs emplois et
							conditions sociales en milieu rural
						</Text>
						<Text>
							Grâce à votre parrainage vous permettez à l'agriculteur de
							s'assurer un prix de vente fixe et de cultiver à la demande. Cela
							permet également d'éviter le gaspillage alimentaire dû à une
							surproduction.
						</Text>
						<Text>
							Soutenez les Farmers qui s'efforcent d'utiliser du matériel
							d'emballage et de mettre en place des pratiques agricoles
							respectant l'environnement.
						</Text>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
