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
    <section className="content">
      <h2 className="subtitle">Confess here</h2>
      <p>You will feel much better when you have got it off your chest</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Subject</label>
        <input {...register("subject")} />

        <label>Reason for Contact</label>
        <select {...register("contactReason")}>
          <option value="rudeness">"Mild Public Rudeness 🤪"</option>
          <option value="vegetables">"Not Eating Your Vegetables 🥗"</option>
          <option value="lift">"Speaking in a Lift 🗣"</option>
          <option value="united">"Supporting Manchester United 😈"</option>
          <option value="justtalk">"I just want to talk"</option>
        </select>
        <input type="submit" />
        <label></label>
        <input {...register("contactLongText")} />
      </form>
    </section>
  );
};

export default Confession;
