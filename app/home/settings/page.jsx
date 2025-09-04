"use client";

import Link from "next/link";
import UpdateAccount from "@/app/ui/components/updateAccount";
import FeedbackForm from "@/app/ui/components/Feedback";
import { Linkedin, Instagram, Github, Facebook, Youtube } from "lucide-react";

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">
        Sua pagína de <span className="text-gradient">Configurações</span>
      </h1>
      <div className="gap-5 flex flex-col gap-10">
        <UpdateAccount />
        <div className="flex items-end justify-between gap-10">
          <FeedbackForm />
          <div className="bg-gradient-to-t from-sky-500 to-indigo-500 rounded-xl cursor-pointer p-0.5 shadow-lg shadow-blue-500/50 hover:from-purple-500 hover:to-sky-500 transition duration-300 w-fit border border-white/10">
            <div className="bg-black p-6 rounded-lg flex flex-col gap-3 items-center justify-center">
              <h3>Builded at Athon Networks</h3>

              <p className="text-cyan-300">Conheça nossos serviços</p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/athonnetworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/athon-networks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/athon-networks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61576637491990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@athonnetworks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
