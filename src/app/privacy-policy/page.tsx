import styles from "./page.module.css"

const PrivacyPolicy: React.FC = async () => {
  return (
    <>
      <div className={styles.privacyPolicy}>
        <h1>Privacy Policy</h1>


        <p>Our Privacy Policy explains how we collect, use, share and protect information in relation to our
          mobile services, web site, and any software provided on or in connection with Seerah.kz services
          (collectively, the "<strong>Service</strong>"), and your choices about the collection and use of
          your information.
        </p>
        <p>By using our Service we shall constitute your acceptance and compliance with these terms. If you do
          not agree with the terms of this policy, in whole or in part, do not download, install, copy or use
          the Service.
        </p>
        <p>Our Policy applies to all visitors, users, and others who access the Service
          ("<strong>Users</strong>").
        </p>

        <h4>INFORMATION WE COLLECT</h4>

        <h5>Analytics information</h5>
        <p>We use third-party analytics tools to help us measure traffic and usage trends for the Service.
          These tools collect information sent by your device or our Service, including the web pages you
          visit, add-ons, and other information that assists us in improving the Service. We collect and use
          this analytics information with analytics information from other Users so that it cannot reasonably
          be used to identify any particular individual User.
        </p>

        <h5>Device identifiers</h5>

        <p>When you use a mobile device like a tablet or phone to access our Service, we may access, collect,
          monitor, store on your device, and/or remotely store one or more "device identifiers." Device
          identifiers are small data files or similar data structures stored on or associated with your mobile
          device, which uniquely identify your mobile device. A device identifier may be data stored in
          connection with the device hardware, data stored in connection with the device's operating system or
          other software, or data sent to the device by Seerah.kz.
        </p>
        <p>A device identifier may deliver information to us or to a third party partner about how you browse
          and use the Service and may help us or others provide reports or personalized content and ads. Some
          features of the Service may not function properly if use or availability of device identifiers is
          impaired or disabled.
        </p>

        <h5>Metadata</h5>
        <p>Metadata is usually technical data that is associated with your location and language. For example,
          Metadata can describe what country are you from or what language are you using.
        </p>


        <h5>Location</h5>

        <p>Your location is required in order to calculate accurate prayer times. Prayer times are based on
          your actual location. Your location is also used to locate the direction to the Qibla (Kaaba).
        </p>

        {/*<h5>In-app purchases / Billing</h5>*/}

        {/*<p>Using the Service is completely free. However, if you want to make a one-time donation, the Service*/}
        {/*  needs to use your existing Apple ID / Google Play Store account in order to make a secure payment.*/}
        {/*  Your validation will still be required at the time of such purchase and we can never access your*/}
        {/*  billing information which remains secured by Apple / Google.*/}
        {/*</p>*/}


        <h5>Other permissions</h5>

        <p>A few other system permissions are also required by the Seerah.kz application in order to download
          files from the Internet, send you notifications, prevent your device from sleeping, make your device
          vibrate, determine the device's state (for example: whether it is ringing, off-hook, or idle) when
          alarm is being fired off, and run at startup to reschedule addon notifications should you restart
          your device.
        </p>

        <h4>SHARING YOUR INFORMATION</h4>
        <p>We will not rent or sell your information to third parties without your consent, except as noted in this
          Policy.</p>

        <h5>Parties with whom we may share your information</h5>

        <p>We may share your information (including but not limited to, information from cookies, log files,
          device identifiers, location data, and usage data) with businesses that are legally part of the same
          group of companies that Seerah.kz is part of, or that become part of that group ("Affiliates").
          Affiliates may use this information to help provide, understand, and improve the Service (including
          by providing analytics) and Affiliates' own services (including by providing you with better and
          more relevant experiences).
        </p>
        <p>We also may share your information as well as information from tools like cookies, log files, and
          device identifiers and location data, with third-party organizations that help us provide the
          Service to you ("Service Providers"). Our Service Providers will be given access to your information
          as is reasonably necessary to provide the Service under reasonable confidentiality terms.
        </p>
        <p>We may also share certain information such as cookie data with third-party advertising partners.
          This information would allow third-party ad networks to, among other things, deliver targeted
          advertisements that they believe will be of most interest to you.
        </p>
        <p>We may remove parts of data that can identify you and share anonymized data with other parties. We
          may also combine your information with other information in a way that it is no longer associated
          with you and share that aggregated information.
        </p>


        <h4>SECURITY</h4>
        <p>We regularly monitor our websites and databases for fraud, abuse, and unauthorized use of information to
          protect the information that is under our control.</p>

        <h4>HOW TO CONTACT US</h4>
        <p>If you have any questions about this Privacy Policy or the Service, please find the technical support
          channel in Seerah.kz application at which to contact us.</p>

        <p>Last Updated: Jun 28, 2024</p>
      </div>
    </>
  );
};

export default PrivacyPolicy;