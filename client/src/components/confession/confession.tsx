import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";
import { LOCAL_API_BASE_URL } from "../../api/config/config";
import { ConfessionInput } from "../../../types/misdemeanours.types";

//import { handleConfession } from "../../../../server/services/midemeanours_service.ts";
//import { ConfessionInput } from "../../../../server/services/midemeanours_service.ts";

enum ContactEnum {
  rudeness = "Mild Public Rudeness 🤪",
  vegetables = "Not Eating Your Vegetables 🥗",
  lift = "Speaking in a Lift 🗣",
  united = "Supporting Manchester United 😈",
  justtalk = "I just want to talk",
}

interface IFormInput {
  subject: string;
  details: string;
  reason: ContactEnum;
}

const ConfessionEntry: React.FC = () => {
  //const [confessionInput, setConfessionInput] = useState<ConfessionInput[]>([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ConfessionInput>();
  const onSubmit: SubmitHandler<ConfessionInput> = (ConfessionEntry) =>
    PostConfession(ConfessionEntry);

  const PostConfession = async (confession: ConfessionInput) => {
    console.log("I'm inside!");
    console.log(confession);
    const confessionToUpload = confession;
    console.log("Tell me the new variable");
    console.log(confessionToUpload.subject);

    try {
      if (confession === undefined) return;
      console.log("I'm after the undefined check!");

      const response = await axios.post(
        LOCAL_API_BASE_URL + "/confess/" + confession
      );
    } catch (error) {
      console.error("Error sending confession to server:", error);
    }
  };

  return (
    <section>
      <p className="pt-8 px-20 text-2xl">
        It's very difficult to catch people committing misdemeanours so we
        appreciate it when citizens confess to us directly
      </p>
      <p className="pb-2 px-20 text-2xl">
        However, if you're just having a hard day and need to vent, then you're
        welcome to contact us here too. Up to you!
      </p>
      <form
        className="w-full max-w-4xl m-auto py-10 mt-10 px-10 border border-gray-600"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label>Subject: </label>
          <input
            className="border-solid border-gray-300 border py-2 px-4 w-full
            rounded text-gray-800"
            {...register("subject", {
              required: "Please enter a subject",
              max: 30,
            })}
          />
          {errors.subject && (
            <div className="mb-3 text-normal text-red-500 ">
              {errors.subject.message}
            </div>
          )}
        </div>
        <div>
          <label>Reason for Contact: </label>
          <select
            className="border-solid border-gray-300 border py-2 px-4 w-full
            rounded text-gray-800"
            {...register("reason", { required: true })}
          >
            <option value="rudeness">"Mild Public Rudeness 🤪"</option>
            <option value="vegetables">"Not Eating Your Vegetables 🥗"</option>
            <option value="lift">"Speaking in a Lift 🗣"</option>
            <option value="united">"Supporting Manchester United 😈"</option>
            <option value="justtalk">"I just want to talk"</option>
          </select>
        </div>
        <div>
          <label></label>
          <textarea
            className="mt-4 border-solid border-gray-300 border py-20 px-4 w-full
            rounded text-gray-900"
            rows={5}
            {...register("details", {
              required: "Please give a brief description",

              maxLength: 400,
            })}
          />
          {errors.details && (
            <div className="mb-3 text-normal text-red-500 ">
              {errors.details.message}
            </div>
          )}
        </div>
        <button type="submit" className="button-primary mt-4">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ConfessionEntry;
