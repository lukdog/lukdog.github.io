import React from 'react';
import ClassNames from 'classnames';
import SocialIcon from '../Icons/SocialIcon';
import { SocialLinks } from '../../types/global';

type SocialsWidgetProps = {
  socials: SocialLinks;
  className?: string;
  height: number;
  width: number;
  iconClassName?: string;
};

export default function SocialsWidget({ socials, height, width, className, iconClassName }: SocialsWidgetProps) {
  return (
    <div className={ClassNames('flex flex-row items-center', className)}>
      {socials.instagram && (
        <SocialIcon name="Instagram" width={width} height={height} url={socials.instagram} className={iconClassName} />
      )}
      {socials.twitter && (
        <SocialIcon name="Twitter" width={width} height={height} url={socials.twitter} className={iconClassName} />
      )}
      {socials.linkedin && (
        <SocialIcon name="LinkedIn" width={width} height={height} url={socials.linkedin} className={iconClassName} />
      )}
      {socials.github && (
        <SocialIcon name="GitHub" width={width} height={height} url={socials.github} className={iconClassName} />
      )}
      {socials.facebook && (
        <SocialIcon name="Facebook" width={width} height={height} url={socials.facebook} className={iconClassName} />
      )}
      {socials.discord && (
        <SocialIcon name="Discord" width={width} height={height} url={socials.discord} className={iconClassName} />
      )}
      {socials.spotify && (
        <SocialIcon name="Spotify" width={width} height={height} url={socials.spotify} className={iconClassName} />
      )}
      {socials.telegram && (
        <SocialIcon name="Telegram" width={width} height={height} url={socials.telegram} className={iconClassName} />
      )}
      {socials.tiktok && (
        <SocialIcon name="TikTok" width={width} height={height} url={socials.tiktok} className={iconClassName} />
      )}
      {socials.twitch && (
        <SocialIcon name="Twitch" width={width} height={height} url={socials.twitch} className={iconClassName} />
      )}
      {socials.youtube && (
        <SocialIcon name="YouTube" width={width} height={height} url={socials.youtube} className={iconClassName} />
      )}
      {socials.apple && (
        <SocialIcon name="Apple" width={width} height={height} url={socials.apple} className={iconClassName} />
      )}
      {socials.clubhouse && (
        <SocialIcon name="Clubhouse" width={width} height={height} url={socials.clubhouse} className={iconClassName} />
      )}
      {socials.dribbble && (
        <SocialIcon name="Dribbble" width={width} height={height} url={socials.dribbble} className={iconClassName} />
      )}
      {socials.figma && (
        <SocialIcon name="Figma" width={width} height={height} url={socials.figma} className={iconClassName} />
      )}
      {socials.google && (
        <SocialIcon name="Google" width={width} height={height} url={socials.google} className={iconClassName} />
      )}
      {socials.pinterest && (
        <SocialIcon name="Pinterest" width={width} height={height} url={socials.pinterest} className={iconClassName} />
      )}
      {socials.reddit && (
        <SocialIcon name="Reddit" width={width} height={height} url={socials.reddit} className={iconClassName} />
      )}
      {socials.signal && (
        <SocialIcon name="Signal" width={width} height={height} url={socials.signal} className={iconClassName} />
      )}
      {socials.skype && (
        <SocialIcon name="Skype" width={width} height={height} url={socials.skype} className={iconClassName} />
      )}
      {socials.snapchat && (
        <SocialIcon name="Snapchat" width={width} height={height} url={socials.snapchat} className={iconClassName} />
      )}
      {socials.tumblr && (
        <SocialIcon name="Tumblr" width={width} height={height} url={socials.tumblr} className={iconClassName} />
      )}
      {socials.VK && <SocialIcon name="VK" width={width} height={height} url={socials.VK} className={iconClassName} />}
    </div>
  );
}
