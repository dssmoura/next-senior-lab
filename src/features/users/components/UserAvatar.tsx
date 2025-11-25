type UserAvatarProps = {
  name: string;
  avatarUrl: string;
};

export function UserAvatar({ name, avatarUrl }: UserAvatarProps) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={avatarUrl}
        alt={name}
        className="w-10 h-10 rounded-full border border-gray-300"
      />
      <span>{name}</span>
    </div>
  );
}
