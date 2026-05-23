import ProfileHero from "../assets/components/ProfileHero";
import ProfileDetails from "../assets/components/ProfileDetails";

export default function Profile() {
  return (
    <div className="min-h-screen bg-white px-4">
      <ProfileHero />
      <ProfileDetails />
    </div>
  );
}
