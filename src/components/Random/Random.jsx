import React, { useState } from 'react'

const randomItems = [
    "Zafer, zafer benimdir diyebilenindir. Başarı ise “başaracağım” diye başlayarak sonunda “başardım diyenindir. (Mustafa Kemal Atatürk)",
    "Kazanma isteği ve başarıya ulaşma arzusu birleşirse kişisel mükemmelliğin kapısını açar. (Konfüçyüs)",
    "Hiçbir şeyden vazgeçme, çünkü sadece kaybedenler vazgeçer. (Abraham Lincoln)",
    "Başarıya çıkan asansör bozuk. Bekleyerek zaman kaybetmeyin, adım adım merdivenleri çıkmaya başlayın. (Joe Girard)",
    "Fırsatlar durup dururken karşınıza çıkmaz, onları siz yaratırsınız. (Chris Grosser)",
    "Şansa çok inanırım ve ne kadar çok çalıştıysam ona o kadar çok sahip oldum. (Thomas Jefferson)",
    "Bir şeye başlayıp başarısız olmaktan daha kötü tek şey hiçbir şeye başlamamaktır. (Seth Godin)",
    "Sadece sınırlarını aşmanın riskini alanlar ne kadar ileri gidebildiklerini görürler. (T.S. Elliot)",
    "Hayat her ne kadar zor görünse de, yapabileceğimiz ve başarabileceğimiz bir şey mutlaka vardır. (Stephen Hawking)",
    "Bir şeye başlayıp başarısız olmaktan daha kötü tek şey hiçbir şeye başlamamaktır. (Seth Godin)",
    "Hiç kimse başarı merdivenine elleri cebinde tırmanmamıştır. (J. Keth Moorhead)",
    "Ne zaman başarılı bir iş görseniz, birisi bir zamanlar mutlaka cesur bir karar almıştır. (Peter Ducker)",
    "Sessizce sıkı çalışın, bırakın başarı sesiniz olsun. (Frank Ocean)",
    "Eğer her şey kontrol altında gibi görünüyorsa, yeterince hızlı gitmiyorsunuzdur. (Mario Andretti)",
    "Başarısız insanlar içerisinde bulundukları duruma göre karar verirler. Başarılı insanlar ise olmak istedikleri yere göre karar verirler. (Benjamin Hardy)",
    "Sadece başarılı bir insan olmaya değil, değerli bir insan olmaya çalışın. (Albert Einstein)",
    "Başarı son değildir, başarısızlık ise ölümcül değildir: Önemli olan ilerlemeye cesaret etmektir. (Winston S. Churchill)",
    "Diğerlerinden daha akıllı olmak zorunda değiliz. Diğerlerinden daha disiplinli olmak zorundayız. (Warren Buffett)",
    "Birisi size bir şeyi yapamayacağını söylediğinde, belki de size sadece kendi yapamadıklarını söylüyordur. (Sheldon Cahoon",
]

const Random = () => {
  const [random, setRandom] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Rastgele Özlü Söz</h1>
        <button 
          onClick={() => setRandom(randomItems[Math.floor(Math.random() * randomItems.length)])}
          className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition duration-300 hover:bg-teal-600 transform hover:scale-105 mb-6"
        >
          Rastgele söz
        </button>
        {random && (
          <p className="text-lg text-gray-700 italic font-semibold mt-4 px-6 py-4 border-t-2 border-teal-500">
            {random}
          </p>
        )}
      </div>
    </div>
  );
}

export default Random;
