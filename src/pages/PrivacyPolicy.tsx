import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - South India Civil Contractors';
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
            alt="Privacy Policy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Privacy <span className="text-cream">Policy</span>
            </h1>
            <p className="text-xl text-gray-200">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-8 text-gray-600">
              <p className="text-sm text-gray-500 mb-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-red-inferno" size={28} />
                <h2 className="text-3xl font-heading font-bold text-mystic-navy">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                South India Civil Contractors ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website and use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-red-inferno" size={28} />
                <h2 className="text-3xl font-heading font-bold text-mystic-navy">Information We Collect</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-mystic-navy mb-2">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2 ml-4">
                    <li>Fill out contact forms or request quotes</li>
                    <li>Download packages or resources</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us via email or phone</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    This information may include your name, phone number, email address, and any other details 
                    you choose to provide.
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-mystic-navy mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, 
                    including information about your web browser, IP address, time zone, and some of the cookies 
                    that are installed on your device.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-red-inferno" size={28} />
                <h2 className="text-3xl font-heading font-bold text-mystic-navy">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To process transactions and send related information</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-red-inferno" size={28} />
                <h2 className="text-3xl font-heading font-bold text-mystic-navy">Data Protection</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            {/* Sharing Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-mystic-navy mb-4">Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-mystic-navy mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-mystic-navy mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies to enhance your browsing experience. Cookies are small text files stored 
                on your device that help us analyze website traffic and customize content. You can choose to accept 
                or decline cookies through your browser settings.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-mystic-navy mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy policies 
                of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-mystic-navy mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you believe we have collected information from a child, 
                please contact us immediately.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-mystic-navy mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date. You are advised to 
                review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12 p-6 bg-accent/10 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-red-inferno" size={28} />
                <h2 className="text-3xl font-heading font-bold text-mystic-navy">Contact Us</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="text-gray-700 space-y-2">
                <p><strong>Email:</strong> build@southindiacivilcontractor.com</p>
                <p><strong>Phone:</strong> +91 888 111 7337</p>
                <p><strong>Address:</strong> No 35, 1st Floor, 1st Stage, 2nd Phase, Chandra Layout, Bangalore-560040</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
