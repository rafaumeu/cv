import { FormattedMessage } from 'react-intl';
import { profiles } from '@/data/cv-data';

interface ProfileSelectorProps {
  currentProfile: keyof typeof profiles;
  onProfileChange: (profile: keyof typeof profiles) => void;
}

export const ProfileSelector = ({ currentProfile, onProfileChange }: ProfileSelectorProps) => {
  return (
    <div className="flex items-center gap-2 print:hidden">
      <label htmlFor="profile-select" className="text-sm font-medium">
        <FormattedMessage id="profile.select" />
      </label>
      <select
        id="profile-select"
        value={currentProfile}
        onChange={(e) => onProfileChange(e.target.value as keyof typeof profiles)}
        className="bg-card-light dark:bg-card-dark rounded px-2 py-1 text-sm"
      >
        {Object.keys(profiles).map((profile) => (
          <option key={profile} value={profile}>
            <FormattedMessage id={`profile.${profile}`} />
          </option>
        ))}
      </select>
    </div>
  );
}; 