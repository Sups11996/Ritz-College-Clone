import crowne from '../../assets/crowneplaza.png';
import Hilton from '../../assets/hilton.webp';
import Soaltee from '../../assets/soaltee.png';
import marriott from '../../assets/mariott.jpg';
import radisson from '../../assets/radisson.png';  
import yak from '../../assets/Yak And Yati.png';

const countries = [
  { name: 'Crowne plaza', flag: crowne },
  { name: 'Hilton', flag: Hilton },
  { name: 'Soaltee Hotel And Resort', flag: Soaltee },
  { name: 'Marriott', flag: marriott },
  { name: 'Radisson', flag: radisson },
  { name: 'Yak And Yati', flag: yak },
];


function NationalInternship() {
  return (
    <div className="px-6 md:px-12 lg:px-16 mt-10 md:mt-20 pb-10 md:pb-15 mb-0">
      <div className="flex flex-col justify-center md:block">
        <h2 className="text-xl md:text-2xl font-bold text-[#1100AB] border-b border-[#cfcaff] pb-3 mb-8">National Internship</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {countries.map((c) => (
            <div key={c.name} className="border border-gray-200 rounded-xl p-3 md:p-4 text-center ">
              <div className="w-30 h-30 md:h-40 md:w-40 mx-auto rounded-full overflow-hidden hover:scale-105 transition-all duration-500  ">
                <img src={c.flag} className="w-full h-full object-cover hover:scale-105 transition-all duration-500 " />
                
              </div>
              <p className="mt-2 text-sm md:text-base font-bold">{c.name}</p>

              </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default NationalInternship;