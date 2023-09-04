import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  subject: string;
  details: string;
  reason: string;
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
  details: string;
  reason: ContactEnum;
}

const Confession: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
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

export default Confession;
