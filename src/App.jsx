import { useEffect } from 'react'
import './App.css'

const pages = {
  '/': {
    title: 'MyWeightApp | Weight Tracking Made Simple',
  },
  '/privacy/': {
    title: 'Privacy Policy | MyWeightApp',
  },
  '/eula/': {
    title: 'Terms of Use (EULA) | MyWeightApp',
  },
}

function normalizePath(pathname) {
  if (pathname === '/privacy' || pathname === '/privacy-policy' || pathname === '/privacy.html') {
    return '/privacy/'
  }

  if (
    pathname === '/terms' ||
    pathname === '/terms-of-use' ||
    pathname === '/eula' ||
    pathname === '/eula.html'
  ) {
    return '/eula/'
  }

  return pathname in pages ? pathname : '/'
}

function navigateTo(pathname) {
  window.location.assign(pathname)
}

function NavLink({ href, currentPath, children }) {
  const isActive = currentPath === href

  return (
    <a href={href} className={isActive ? 'nav-link active' : 'nav-link'} aria-current={isActive ? 'page' : undefined}>
      {children}
    </a>
  )
}

function PageLayout({ currentPath, children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <button
          type="button"
          className="brand"
          onClick={() => navigateTo('/')}
          aria-label="Go to MyWeightApp home page"
        >
          <span className="brand-mark">
            <img src="/logo.png" alt="" className="brand-logo" />
          </span>
          <span className="brand-copy">
            <strong>MyWeightApp</strong>
            <span>Mobile app website</span>
          </span>
        </button>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink href="/" currentPath={currentPath}>
            Home
          </NavLink>
          <NavLink href="/privacy/" currentPath={currentPath}>
            Privacy Policy
          </NavLink>
          <NavLink href="/eula/" currentPath={currentPath}>
            Terms of Use
          </NavLink>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <p>MyWeightApp</p>
        <div className="footer-links">
          <NavLink href="/" currentPath={currentPath}>
            Home
          </NavLink>
          <NavLink href="/privacy/" currentPath={currentPath}>
            Privacy Policy
          </NavLink>
          <NavLink href="/eula/" currentPath={currentPath}>
            Terms of Use
          </NavLink>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">A simpler way to lose weight with a clear calorie plan</p>
          <h1>Take Control of Your Weight&#8212;Without the Guesswork</h1>
          <p className="hero-text">
            A simple, data-driven app that tells you exactly how many calories to
            eat to hit your goal weight&#8212;on your timeline.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#start-plan">
              Start Your Plan
            </a>
            <a className="secondary-button" href="#how-it-works">
              See How It Works
            </a>
          </div>
        </div>

        <div className="hero-card" aria-hidden="true">
          <div className="phone-frame screenshot-frame">
            <img
              className="dashboard-shot"
              src="/dashboard.png"
              alt="MyWeightApp dashboard showing target calories, starting weight, current weight, and a progress chart"
            />
          </div>
        </div>
      </section>

      <section className="content-section two-column-section">
        <article className="section-card">
          <p className="feature-kicker">Problem</p>
          <h2>Most Weight Loss Plans Fail for One Reason</h2>
          <p>
            You&rsquo;re told to &ldquo;eat less&rdquo; and &ldquo;move more&rdquo;,
            but no one tells you how much less, or how long it will actually take.
          </p>
          <p>So you guess.</p>
          <p>You under-eat, burn out, or stall completely.</p>
          <p>MyWeight removes the guesswork.</p>
        </article>

        <article className="section-card">
          <p className="feature-kicker">Solution</p>
          <h2>A Clear Plan. Built for You.</h2>
          <p>MyWeight calculates your exact daily calorie target based on:</p>
          <ul className="bullet-list">
            <li>Your current weight</li>
            <li>Your goal weight</li>
            <li>Your timeline</li>
            <li>Your maintenance level</li>
          </ul>
          <p>No vague advice. No generic plans.</p>
          <p>Just numbers that work.</p>
        </article>
      </section>

      <section className="content-section" id="how-it-works">
        <div className="section-heading">
          <p className="feature-kicker">How It Works</p>
          <h2>A simple system you can follow every day</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <p className="step-label">Step 1</p>
            <h2>Set Your Goal</h2>
            <p>Enter your starting weight, goal weight, and target date.</p>
          </article>

          <article className="feature-card">
            <p className="step-label">Step 2</p>
            <h2>Get Your Numbers</h2>
            <p>See exactly how many calories to eat each day to stay on track.</p>
          </article>

          <article className="feature-card">
            <p className="step-label">Step 3</p>
            <h2>Log &amp; Adjust</h2>
            <p>
              Track your weight and calories. Watch your progress update in real
              time.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="feature-kicker">Features</p>
          <h2>Everything You Need&#8212;Nothing You Don&rsquo;t</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h2>Daily Calorie Target</h2>
            <p>Know exactly what to eat to stay on pace.</p>
          </article>

          <article className="feature-card">
            <h2>Weight Tracking</h2>
            <p>Log your progress and stay accountable.</p>
          </article>

          <article className="feature-card">
            <h2>Real-Time Adjustments</h2>
            <p>Your plan updates as your weight changes.</p>
          </article>

          <article className="feature-card">
            <h2>Simple Dashboard</h2>
            <p>See calories, weight remaining, and days left at a glance.</p>
          </article>

          <article className="feature-card">
            <h2>No Noise</h2>
            <p>No workouts, no fluff&#8212;just what matters.</p>
          </article>

          <article className="feature-card accent-card">
            <p className="feature-kicker">Philosophy</p>
            <h2>Based on One Principle</h2>
            <p>Weight loss comes down to a calorie deficit over time.</p>
            <p>MyWeight doesn&rsquo;t complicate that. It makes it actionable.</p>
          </article>
        </div>
      </section>

      <section className="content-section two-column-section">
        <article className="section-card">
          <p className="feature-kicker">Results</p>
          <h2>Built for Real Life</h2>
          <p>This isn&rsquo;t a fitness influencer plan.</p>
          <p>
            It&rsquo;s a system you can follow while working, parenting, and
            living your life.
          </p>
          <p>Stay consistent. See results. Repeat.</p>
        </article>

        <article className="section-card">
          <p className="feature-kicker">FAQ</p>
          <h2>Simple enough to start, accurate enough to trust</h2>
          <div className="faq-list">
            <div>
              <h3>Do I need to track macros?</h3>
              <p>No. Calories are the primary driver.</p>
            </div>
            <div>
              <h3>What if I miss a day?</h3>
              <p>Just log again tomorrow. The plan adjusts.</p>
            </div>
            <div>
              <h3>Is this for beginners or experienced users?</h3>
              <p>Both. It&rsquo;s simple enough to start, accurate enough to trust.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="content-section" id="start-plan">
        <article className="cta-card">
          <p className="feature-kicker">Get Started</p>
          <h2>Start Losing Weight&#8212;With a Plan That Actually Works</h2>
          <p className="hero-text">
            Stop guessing. Stop restarting. Get a clear path from where you are
            to where you want to be.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#start-plan">
              Start Your Plan
            </a>
          </div>
        </article>
      </section>
    </>
  )
}

function LegalPage({ title, intro, sections }) {
  return (
    <section className="legal-page">
      <div className="legal-intro">
        <p className="eyebrow">MyWeightApp</p>
        <h1>{title}</h1>
        <p className="hero-text">{intro}</p>
      </div>

      <div className="legal-card">
        {sections.map((section) => (
          <section className="legal-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </section>
  )
}

function App() {
  const pathname = normalizePath(window.location.pathname)
  const page = pages[pathname]

  useEffect(() => {
    document.title = page.title
  }, [page.title])

  return (
    <PageLayout currentPath={pathname}>
      {pathname === '/' ? <HomePage /> : null}

      {pathname === '/privacy/' ? (
        <LegalPage
          title="Privacy Policy"
          intro="Effective Date: 3/18/2026"
          sections={[
            {
              heading: 'Overview',
              paragraphs: [
                'MyWeight (“we,” “our,” or “us”) operates the MyWeight mobile application and related services (the “Service”).',
                'This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.',
              ],
            },
            {
              heading: '1. Information We Collect',
              paragraphs: [
                'Personal Information',
                'We may collect the following information you provide directly:',
                'Name (if provided)',
                'Email address',
                'Account login credentials (if applicable)',
                'Payment-related identifiers (processed through third parties)',
                'Health & Fitness Data',
                'To provide core functionality, we collect:',
                'Weight entries',
                'Calorie intake data',
                'Goal weight and target dates',
                'This data is used solely to provide app functionality and is not classified as medical advice.',
                'Automatically Collected Data',
                'We may collect:',
                'Device type and operating system',
                'App usage data (features used, session duration)',
                'IP address and approximate location',
              ],
            },
            {
              heading: '2. How We Use Your Information',
              paragraphs: [
                'We use your information to:',
                'Provide and maintain the Service',
                'Calculate calorie targets and weight projections',
                'Improve app performance and user experience',
                'Communicate with you (account updates, support)',
                'Process payments and manage subscriptions',
                'Comply with legal obligations',
              ],
            },
            {
              heading: '3. In-App Purchases & Payments',
              paragraphs: [
                'MyWeight may offer paid features through in-app purchases.',
                'Payments are processed by third-party providers such as Apple Inc. (App Store) and Google LLC (Google Play).',
                'We do not store your full payment details (e.g., credit card numbers).',
                'We may receive transaction confirmations, subscription status, and limited billing data.',
                'Subscriptions automatically renew unless canceled through your app store account.',
              ],
            },
            {
              heading: '4. Sharing Your Information',
              paragraphs: [
                'We do not sell your personal data.',
                'We may share information with:',
                'Service providers (hosting, analytics, payment processors)',
                'Legal authorities if required by law',
                'Business transfers (e.g., merger or acquisition)',
                'All third parties are required to safeguard your data.',
              ],
            },
            {
              heading: '5. Data Retention',
              paragraphs: [
                'We retain your data only as long as necessary to:',
                'Provide the Service',
                'Fulfill legal obligations',
                'Resolve disputes',
                'You may request deletion of your data at any time.',
              ],
            },
            {
              heading: '6. Your Rights (U.S. & General)',
              paragraphs: [
                'You have the right to:',
                'Access your data',
                'Correct inaccurate data',
                'Request deletion',
                'Withdraw consent where applicable',
                'To make a request, contact us using the details below.',
              ],
            },
            {
              heading: '7. European Economic Area (EEA) & UK Rights (GDPR)',
              paragraphs: [
                'If you are located in the EEA or UK, you have additional rights under the General Data Protection Regulation (GDPR):',
                'Right to access your personal data',
                'Right to rectification',
                'Right to erasure (“right to be forgotten”)',
                'Right to restrict processing',
                'Right to data portability',
                'Right to object to processing',
                'Legal Basis for Processing',
                'We process your data based on:',
                'Contractual necessity (to provide the app)',
                'Legitimate interests (improving the Service)',
                'Consent (where required)',
                'Data Transfers',
                'Your data may be transferred outside the EEA (e.g., to the United States). We ensure appropriate safeguards are in place.',
                'Complaints',
                'You may file a complaint with your local data protection authority.',
              ],
            },
            {
              heading: '8. California Privacy Rights (CCPA/CPRA)',
              paragraphs: [
                'If you are a California resident, you have the right to:',
                'Know what personal data we collect',
                'Request deletion of your data',
                'Opt out of the sale of personal data (we do not sell data)',
                'Non-discrimination for exercising your rights',
              ],
            },
            {
              heading: '9. Data Security',
              paragraphs: [
                'We implement reasonable administrative, technical, and physical safeguards to protect your information.',
                'However, no system is completely secure. Use the Service at your own risk.',
              ],
            },
            {
              heading: '10. Children’s Privacy',
              paragraphs: [
                'MyWeight is not intended for children under 13.',
                'We do not knowingly collect data from children. If we become aware of such data, we will delete it.',
              ],
            },
            {
              heading: '11. Third-Party Services',
              paragraphs: [
                'The Service may integrate with third-party tools (analytics, authentication, etc.). These providers have their own privacy policies.',
              ],
            },
            {
              heading: '12. Changes to This Policy',
              paragraphs: [
                'We may update this Privacy Policy from time to time.',
                'Changes will be posted with an updated “Effective Date.” Continued use of the Service means you accept the updated policy.',
              ],
            },
            {
              heading: '13. Contact Information',
              paragraphs: [
                'If you have questions or requests regarding this Privacy Policy, contact us:',
                'MyWeight / Coleman Development',
                '109 W Daybreak Ln',
                'Saratoga Springs, UT 84045',
                'United States',
                'Phone: 801-205-3850',
                'Email: colemandevelopmentutah@gmail.com',
              ],
            },
          ]}
        />
      ) : null}

      {pathname === '/eula/' ? (
        <LegalPage
          title="Terms of Use (EULA)"
          intro="Effective Date: 3/18/2026"
          sections={[
            {
              heading: 'Overview',
              paragraphs: [
                'This End User License Agreement (“Agreement”) is a legal agreement between you (“User,” “you”) and MyWeight / Coleman Development (“Company,” “we,” “our,” or “us”) governing your use of the MyWeight mobile application and related services (the “App” or “Service”).',
                'By downloading, installing, or using the App, you agree to be bound by this Agreement.',
              ],
            },
            {
              heading: '1. License Grant',
              paragraphs: [
                'We grant you a limited, non-exclusive, non-transferable, revocable license to:',
                'Download and use the App for personal, non-commercial purposes',
                'Access features provided within the App',
                'You do not acquire ownership of the App or any intellectual property.',
              ],
            },
            {
              heading: '2. Restrictions',
              paragraphs: [
                'You agree not to:',
                'Copy, modify, or distribute the App',
                'Reverse engineer, decompile, or attempt to extract source code',
                'Use the App for illegal or unauthorized purposes',
                'Circumvent security or subscription systems',
                'Violation may result in termination of your access.',
              ],
            },
            {
              heading: '3. User Data & Responsibility',
              paragraphs: [
                'You are responsible for:',
                'The accuracy of any data you enter (weight, calories, goals)',
                'Maintaining the confidentiality of your account',
                'We are not responsible for outcomes based on incorrect or incomplete data.',
              ],
            },
            {
              heading: '4. Health Disclaimer',
              paragraphs: [
                'MyWeight is not a medical application.',
                'The App provides general fitness and calorie guidance only',
                'It does not provide medical advice, diagnosis, or treatment',
                'You should consult a licensed healthcare provider before making health decisions',
                'Use of the App is at your own risk.',
              ],
            },
            {
              heading: '5. In-App Purchases & Subscriptions',
              paragraphs: [
                'The App may offer paid features through subscriptions or one-time purchases.',
                'Payments are processed through Apple Inc. (App Store) or Google LLC (Google Play).',
                'Subscriptions automatically renew unless canceled before the renewal date.',
                'Pricing is subject to change at any time.',
                'Billing Terms',
                'You authorize the platform provider to charge your account.',
                'Refunds are handled according to the app store’s policies (not by us directly).',
                'You must manage cancellations through your app store account.',
              ],
            },
            {
              heading: '6. Termination',
              paragraphs: [
                'We reserve the right to:',
                'Suspend or terminate access at any time for violations of this Agreement',
                'Modify or discontinue the App without notice',
                'You may stop using the App at any time.',
              ],
            },
            {
              heading: '7. Intellectual Property',
              paragraphs: [
                'All content, features, and functionality, including:',
                'App design',
                'Algorithms and calculations',
                'Branding and trademarks',
                'are owned by MyWeight / Coleman Development and protected by applicable laws.',
              ],
            },
            {
              heading: '8. Privacy',
              paragraphs: [
                'Your use of the App is also governed by our Privacy Policy.',
                'By using the App, you agree to how we collect and use data as described there.',
              ],
            },
            {
              heading: '9. Disclaimer of Warranties',
              paragraphs: [
                'The App is provided “as is” and “as available.”',
                'We make no guarantees regarding:',
                'Accuracy of results',
                'Continuous availability',
                'Error-free operation',
                'To the fullest extent permitted by law, we disclaim all warranties, express or implied.',
              ],
            },
            {
              heading: '10. Limitation of Liability',
              paragraphs: [
                'To the maximum extent permitted by law:',
                'We are not liable for any indirect, incidental, or consequential damages',
                'This includes loss of data, health outcomes, or financial loss',
                'Our total liability will not exceed the amount you paid (if any) in the last 12 months.',
              ],
            },
            {
              heading: '11. Indemnification',
              paragraphs: [
                'You agree to indemnify and hold harmless MyWeight / Coleman Development from any claims arising from:',
                'Your use of the App',
                'Violation of this Agreement',
                'Misuse of the Service',
              ],
            },
            {
              heading: '12. Governing Law',
              paragraphs: [
                'This Agreement is governed by the laws of the State of Utah, United States, without regard to conflict of law principles.',
              ],
            },
            {
              heading: '13. EU/EEA Users',
              paragraphs: [
                'If you are located in the European Economic Area:',
                'You may have additional consumer rights under applicable law',
                'Nothing in this Agreement limits mandatory rights under your local laws',
              ],
            },
            {
              heading: '14. Changes to This Agreement',
              paragraphs: [
                'We may update these Terms at any time.',
                'Changes will be posted with an updated effective date',
                'Continued use of the App means you accept the updated terms',
              ],
            },
            {
              heading: '15. Contact Information',
              paragraphs: [
                'MyWeight / Coleman Development',
                '109 W Daybreak Ln',
                'Saratoga Springs, UT 84045',
                'United States',
                'Phone: 801-205-3850',
                'Email: colemandevelopmentutah@gmail.com',
              ],
            },
            {
              heading: '16. App Store Compliance (Apple Users)',
              paragraphs: [
                'If you download the App through the Apple App Store:',
                'This Agreement is between you and MyWeight, not Apple Inc.',
                'Apple is not responsible for the App or its content',
                'Apple has no obligation to provide maintenance or support',
                'Apple is a third-party beneficiary of this Agreement and may enforce it',
              ],
            },
          ]}
        />
      ) : null}
    </PageLayout>
  )
}

export default App
