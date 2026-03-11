"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div>
      <div className="flex items-center justify-between px-48 py-1 bg-gray-800 text-white">
        <div className="flex items-center">
          <img src="/m.png" />
          <a className="text-xl font-bold">Mbank</a>

          <div className="flex items-center gap-8 px-8">
            <a className="text-xs cursor-pointer hover:text-green-400 text-gray-400">
              Танд
            </a>
            <a className="text-xs cursor-pointer hover:text-green-400 text-gray-400">
              Таны бизнест
            </a>
            <a className="text-xs cursor-pointer hover:text-green-400 text-gray-400">
              Бид
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-green-500">M туслах</button>
          <a>|</a>
          <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
            Нэвтрэх
          </button>
        </div>
      </div>

      <img src="/img.png" />

      <div style={{ height: "10vh" }}></div>

      <div
        style={{
          height: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          background: "white",
        }}
      >
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 30, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <div className="font-bold text-6xl">
            <h2>Танд зориулсан</h2>
            <p>шинэ үеийн</p>
            <p>банк</p>
          </div>
          <div className="h-15"></div>
          <div className="text-gray-400">
            <p className="text-xl">
              Банкны салбар хаах цагийг мэдэх шаардлагагүй.
            </p>
            <p className="text-xl">
              Санхүүгийн бүх үйлчилгээг зайнаас аваарай.
            </p>
          </div>
        </motion.div>

        <motion.img
          src="/phn.png"
          style={{ width: 800 }}
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 150, opacity: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0 }}
        />
      </div>
      <div style={{ height: "20vh" }}></div>
      <div
        style={{
          height: 700,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#33363b",
        }}
      >
        <motion.img
          src="/scne.png"
          style={{ width: 800 }}
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: -115, opacity: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0 }}
        />{" "}
        <motion.div
          initial={{ x: 150, y:-100, opacity: 0 }}
          whileInView={{ x: -30, y: -100, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <div className="font-bold text-6xl text-white">
            <h2>Бид бизнесүүдээ ч</h2>
            <p>мартаагүй</p>
          </div>
          <div className="h-15"></div>
          <div className="text-gray-400">
            <p className="text-xl">
              Таны бизнесийг хэнээс ч илүү ойлгож, хамтран ажиллая.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="bg-[#2c2f34] py-20 text-white flex justify-center">
        <div className="max-w-7xl w-full px-6">
          <h1 className="text-4xl font-bold text-center mb-16">Блог</h1>

          <div className="flex flex-col gap-8">
            <div className="bg-[#3a3f45] rounded-2xl overflow-hidden flex">
              <img src="/ght.png" className="w-7/10 object-cover" />

              <div className="p-10 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-3">Урамшуулал</p>

                  <h2 className="text-2xl font-bold leading-snug">
                    Хадгаламжийн сугалаат хөтөлбөрийн I үеийн азтанууд тодорлоо
                  </h2>
                </div>
                <p className="text-sm text-gray-400 mt-6">
                  2026.03.10 · 2 минут унших
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-[#3a3f45] rounded-2xl overflow-hidden">
                <img src="/rlty.jpg" className="w-full h-80 object-cover" />

                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">
                    Тогтвортой хөгжил
                  </p>

                  <h3 className="text-2xl font-bold leading-snug">
                    М банк Засгийн газрын хүний хөнгөлөлттэй зээлийн хөтөлбөрт
                    нэгдлээ
                  </h3>

                  <div className="h-12" />
                  <p className="text-sm text-gray-400 mt-4">
                    2026.03.06 · 3 минут унших
                  </p>
                </div>
              </div>

              <div className="bg-[#3a3f45] rounded-2xl overflow-hidden">
                <img src="/smidk.png" className="w-full h-80 object-cover" />

                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">Бүтээгдэхүүн</p>

                  <h3 className="text-2xl font-bold leading-snug">
                    M-ийн найзууд юанийн гүйлгээг илүү амар хийх боломжтой
                    боллоо
                  </h3>
                  <div className="h-12" />
                  <p className="text-sm text-gray-400 mt-4">
                    2026.03.05 · 2 минут унших
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
