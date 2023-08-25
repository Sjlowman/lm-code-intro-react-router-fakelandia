import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  subject: string;
  contactReason: string;
  confessionDetail: string;
};
enum ContactEnum {
  rudeness = "Mild Public Rudeness 🤪",
  vegetables = "Not Eating Your Vegetables 🥗",
  lift = "Speaking in a Lift 🗣",
  united = "Supporting Manchester United 😈",
  justtalk = "I just want to talk",
}

interface IFormInput {
  subject: string;
  contactReason: ContactEnum;
  contactLongText: string;
}

const Confession: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <section>
      <p className="pt-8 px-10 text-2xl">
        It's very difficult to catch people committing misdemeanours so we
        appreciate it when citizens confess to us directly
      </p>
      <p className="pb-8 px-10 text-2xl">
        However, if you're just having a hard day and need to vent then you're
        welcome to contact us here too. Up to you!
      </p>
      <form
        className="px-32 flex flex-col justify-self-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label>Subject: </label>
          <input
            className="my-3 border-2 border-gray-900"
            {...register("subject")}
          />
        </div>
        <div>
          <label>Reason for Contact: </label>
          <select
            className="my-3 border-2 border-gray-900"
            {...register("contactReason")}
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
            className="w-3/5 h-36 align-top break-words overflow-scroll my-3 border-2 border-gray-900"
            {...register("contactLongText")}
          />
        </div>
        <input type="submit" />
      </form>
    </section>
  );
};

export default Confession;
