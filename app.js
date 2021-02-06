//------------------------------------------------------------------------//
//variables
//------------------------------------------------------------------------//

const debug = false;

//New for localization begin
let UpTo = 5;
const Splash_all = 'All solutions',
    Splash_TitlePrefix = 'for',
    Splash_Text = '<p>Cisco Digital Network Architecture (Cisco DNA) is the network foundation for Cisco’s intent-based networking (IBN), purpose-built for the enterprise.</p><p>Cisco DNA is a modern intent-based networking architecture for campus, branch, and WAN, which automates, secures, and assures network performance, so that the network can fully support and quickly respond to new business initiatives.</p>',
    Splash_Text2 = '<p>Answer two questions. Build your tailored Cisco DNA solution.</p>',
    Splash_Text2Assurance = '<p>Cisco DNA Assurance uses AI/ML to provide deep visibility into network devices, users, services, and applications for contextual insights, and guided remediation to ensure a consistent user experience.</p><p>Answer two questions. Build your tailored Cisco DNA Assurance solution.</p>',
    Splash_Text2Automation = '<p>Cisco DNA Automation helps improve efficiency, reduce human error, and lower operating expenses.</p><p>Answer two questions. Build your tailored Cisco DNA Automation solution.</p>',
    Splash_Text2SDAccess = '<p>Cisco Software-Defined Access (SD-Access) provides a complete solution for recognizing endpoints, visualizing traffic patterns, formulating access policies, and segmenting the network to enforce group-based policies that help increase security and reduce risk.</p><p>Answer two questions. Build your tailored Cisco SD-Access solution.</p>',
    Splash_Text2SDWAN = '<p>Cisco SD-WAN securely interconnects geographically distributed campuses, branches, data centers, SaaS providers, and public clouds.</p><p>Answer two questions. Build your tailored Cisco SD-WAN solution.</p>',
    UpTo_Assurance = 5,
    UpTo_Automation = 3,
    UpTo_SDAccess = 4,
    UpTo_SDWAN = 3,
    UpToAlert = 'You have already selected the maximum number of issues',
    Q1_Text = 'Choose up to ',
    Q1_Text2 = ' main issues you’re trying to solve.';
//New for localization end

const Splash_Title = 'Cisco DNA Solution Builder',
    Header_Title = 'Cisco DNA Solution Builder',
    Splash_Assurance = 'Assurance',
    Splash_Automation = 'Automation',
    Splash_SDAccess = 'SD-Access',
    Splash_SDWAN = 'SD-WAN',
    QID_1 = 'Question 1 of 2',
    Q1_Cat = {
        'Q1-CAT1': 'Assuring network performance and uptime:',
        'Q1-CAT2': 'Simplifying segmentation and policy:',
        'Q1-CAT3': 'Defending against security threats:',
        'Q1-CAT4': 'Automating for simplicity:',
        'Q1-CAT5': 'Building a cloud-ready WAN:'
    },

    QID_2 = 'Question 2 of 2',
    Q2_Text = 'Select the option(s) that apply to your situation.',
    Q2_Cat = {
        'Q2-CAT1': 'Deselect options below for more specific solution recommendations.',
        'Q2-CAT2': 'Select any circumstances that apply to your network.'
    },
    Q2_Cat1_Note = '',
    Q2_Cat2_Note = 'Your answer(s) in this section help us recommend the correct Cisco DNA Software for your solution.',
    Q2_CAT2_Multiple = 'Select any circumstances that apply to your network.',
    Q2_CAT2_Single = 'Select if this circumstance applies to your network.',
    Results = 'Results',
    Results_Intro = 'Based upon <a class="modal-answers" href="#">your answers</a>, here are the recommended Cisco DNA solutions tailored to your needs:',
    Results_Intro_Single = 'area',
    Results_Intro_Multiple = 'areas',
    Results_SEC1_Name = 'Cisco DNA software',
    Results_SEC1_Intro = '<p>Cisco DNA software is available in three tiers: Cisco DNA Essentials, Cisco DNA Advantage, and Cisco DNA Premier. Here are the Cisco DNA software tiers to address the main issues you’re trying to solve:</p>',
    SEC1Cat = ['for Switching', 'for Wireless', 'for SD-WAN and Routing', 'for SD-WAN and Routing', 'for SD-WAN and Routing'];
Results_SEC1_Disclaim = '<p class="tn_utilityText">A separate Cisco DNA software subscription should be licensed for each of your Cisco devices.</p><p class="tn_utilityText">Cisco DNA software licenses are available as 3-, 5-, and 7-year subscriptions.</p><p class="tn_utilityText">Flexible volume licensing is available with a <a href="https://www.cisco.com/c/en/us/products/collateral/software/dna-software/nb-06-dna-enrollment-ea-soln-ovw-cte-en.html" target="_blank">Cisco Enterprise Agreement (EA)</a>.</p>',
    Results_SEC2_Name = 'Required appliance(s)',
    Results_SEC3_Name = 'Cisco DNA infrastructure',
    Results_SEC3_Disclaim = '<p>Your existing Cisco devices are probably compatible with this Cisco DNA solution.</p><p>Check the <a href="https://content.cisco.com/compatibilitymatrix.html" target="_blank">list of Cisco DNA supported devices</a> to find out which Cisco DNA features and capabilities your existing Cisco devices support and to make sure those devices are running the latest Cisco iOX software.</p>',
    Results_SEC4_Name = 'Cisco Customer Experience',
    TEC = {
        'TEC-100': 'Switching',
        'TEC-200': 'Wireless',
        'TEC-210': 'Wireless access',
        'TEC-220': 'Wireless LAN controllers',
        'TEC-300': 'SD-WAN and routing',
        'TEC-310': 'SD-WAN',
        'TEC-330': 'Routing'
    },
    Answers_Title = 'Your answers',
    Answers_Q1_Title = 'The main issues you’re trying to solve:',
    Answers_Q2_Title = 'Your situation:',
    Answers_Q2_2_Title = 'Type of networking solution(s) you’re looking for',
    Button_Get_Started = 'Get started',
    Button_Start_Over = 'Start over',
    Button_Back = 'Back',
    Button_Next = 'Next',
    Button_Finish = 'Finish',
    Button_Demo_Show = true,
    Button_Demo = 'Register for demo',
    Button_Demo2 = 'Register for demo',
    Button_Demo_Link = 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/dna-software-series.html',
    Button_PDF_Show = true,
    Button_PDF = 'Download PDF',
    Button_PDF_Link = '',
    Contact_DD_Default = 'Contact Cisco',
    loaderDelay = 800,
    pdfFooter = '<p>Copyright © 2021 Cisco and/or its affiliates. All rights reserved. Cisco and the Cisco logo are trademarks or registered trademarks of Cisco and/or its affiliates in the U.S. and other countries. To view a list of Cisco trademarks, go to this URL: www.cisco.com/go/trademarks. Third-party trademarks mentioned are the property of their respective owners. The use of the word partner does not imply a partnership relationship between Cisco and any other company.</p>';

const dropLinks = [
    {
        'text': 'Get a call from Sales',
        'url': 'https://engage2demand.cisco.com/LP=567?ccid=cc000098&oid=caten018587',
        'button': true, //true or false
        'blank': true //true or false
    },
    {
        'text': 'Product / Technical Support',
        'url': 'https://www.cisco.com/c/en/us/support/index.html',
        'button': false,
        'blank': true
    },
    {
        'text': 'Find a Local Reseller',
        'url': 'https://locatr.cloudapps.cisco.com/WWChannels/LOCATR/openBasicSearch.do',
        'button': false,
        'blank': true
    },
    {
        'text': 'Other Countries',
        'url': 'https://www.cisco.com/c/en/us/about/contact-cisco.html',
        'button': false,
        'blank': true
    },
];

//------------------------------------------------------------------------//
//question1
//------------------------------------------------------------------------//
const question1 = [
    {
        "id": "Q01-110",
        "label": "Manage a growing network",
        "help": "You're adding users, IoT devices, and new services. How can you manage it all efficiently and effectively?",
        "q_id": "Q1",
        "q_cat": "Q1-CAT1",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": null,
        "solution": "SOL-010",
        "software": [
            {
                "switching": "SOF-120",
                "wireless": "SOF-220",
                "routing": "SOF-320"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-120",
        "label": "Maintain consistent network performance",
        "help": "You want to help ensure quality, despite pressures on the network.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT1",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": null,
        "solution": "SOL-010",
        "software": [
            {
                "switching": "SOF-120",
                "wireless": "SOF-220",
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-130",
        "label": "Help ensure a robust and consistent user experience",
        "help": "Wherever they're working or the applications are, your users expect fast, secure access to everything.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT1",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": null,
        "solution": "SOL-010",
        "software": [
            {
                "switching": "SOF-120",
                "wireless": "SOF-220",
                "routing": "SOF-320"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-210",
        "label": "Configure network policies",
        "help": "You'd like to define operating policies and have the network enforce them (for example, segment traffic by user).",
        "q_id": "Q1",
        "q_cat": "Q1-CAT2",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": "Q02-310",
        "solution": "SOL-030",
        "software": [
            {
                "switching": "SOF-130",
                "wireless": "SOF-230",
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": "APP-020",
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-220",
        "label": "Update policies to meet changing business demands",
        "help": "When changing business needs cause operating policy changes, you'd like the network to apply the changes immediately.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT2",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": "Q02-310",
        "solution": "SOL-030",
        "software": [
            {
                "switching": "SOF-130",
                "wireless": "SOF-230",
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": "APP-020",
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-230",
        "label": "Enforce user policies across network domains",
        "help": "You want to define compliance and security policies in one network domain and have them exchanged, enforced, and monitored in all domains (for example, in the campus and data center domains).",
        "q_id": "Q1",
        "q_cat": "Q1-CAT2",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": "Q02-310",
        "solution": "SOL-030",
        "software": [
            {
                "switching": "SOF-130",
                "wireless": "SOF-230",
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": "APP-020",
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-310",
        "label": "Detect inconsistent device system images or configurations",
        "help": "You want the network to automatically sense anomalies in activity, determine the causes, and alert IT staff.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT3",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": null,
        "solution": "SOL-010",
        "software": [
            {
                "switching": "SOF-110",
                "wireless": "SOF-220",
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-320",
        "label": "Establish visibility into security vulnerabilities",
        "help": "You want to monitor security threats in your switching, wireless, and routing devices as well as in client endpoint devices.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT3",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": "Q02-410",
        "solution": "SOL-010",
        "software": [
            {
                "switching": "SOF-130",
                "wireless": "SOF-220",
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-330",
        "label": "Automate quarantining of infected files or user devices",
        "help": "You want to detect infected files or client devices and automatically have them purged or placed in isolation to contain the infection.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT3",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130, Q02-140",
        "q_show_q2_2": "Q02-410",
        "solution": "SOL-030, SOL-040",
        "software": [
            {
                "switching": "SOF-130",
                "wireless": "SOF-220",
                "routing": "SOF-330"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-410",
        "label": "Provision and configure network devices",
        "help": "You want to deploy and manage network devices with consistent configurations to support your business needs.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT4",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": null,
        "solution": "SOL-020",
        "software": [
            {
                "switching": "SOF-110",
                "wireless": "SOF-210",
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-420",
        "label": "Configure QoS for a broad range of user devices",
        "help": "You want to automatically push QoS policies based on the business value of applications to multiple types of user devices.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT4",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": null,
        "solution": "SOL-020",
        "software": [
            {
                "switching": "SOF-110",
                "wireless": "SOF-220",
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-430",
        "label": "Manage software and security patches",
        "help": "You want consistent, &ldquo;golden&rdquo; software images automatically updated across the network.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT4",
        "q_show_q2_1": "Q02-110, Q02-120, Q02-130",
        "q_show_q2_2": null,
        "solution": "SOL-020",
        "software": [
            {
                "switching": "SOF-120",
                "wireless": "SOF-220",
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": "APP-010",
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": "INF-100",
                "wireless": "INF-210",
                "wlcs": "INF-220",
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-510",
        "label": "Install and support branch services remotely",
        "help": "You'd like to install and deploy virtualized network services in branches from a central location.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT5",
        "q_show_q2_1": "Q02-140",
        "q_show_q2_2": "Q02-210",
        "solution": "SOL-040",
        "software": [
            {
                "switching": null,
                "wireless": null,
                "routing": "SOF-310"
            }
        ],
        "appliance": [
            {
                "product1": null,
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": null,
                "wireless": null,
                "wlcs": null,
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-520",
        "label": "Optimize SaaS application performance",
        "help": "You'd like to help ensure that your WAN delivers optimal experience to branch users running cloud applications.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT5",
        "q_show_q2_1": "Q02-140",
        "q_show_q2_2": null,
        "solution": "SOL-040",
        "software": [
            {
                "switching": null,
                "wireless": null,
                "routing": "SOF-320"
            }
        ],
        "appliance": [
            {
                "product1": null,
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": null,
                "wireless": null,
                "wlcs": null,
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    },
    {
        "id": "Q01-530",
        "label": "Implement a secure access services edge (SASE)",
        "help": "You want cloud-based security for Internet and cloud applications.",
        "q_id": "Q1",
        "q_cat": "Q1-CAT5",
        "q_show_q2_1": "Q02-140",
        "q_show_q2_2": "Q02-510",
        "solution": "SOL-040",
        "software": [
            {
                "switching": null,
                "wireless": null,
                "routing": "SOF-330"
            }
        ],
        "appliance": [
            {
                "product1": null,
                "product2": null,
                "product3": null
            }
        ],
        "infrastructure": [
            {
                "switching": null,
                "wireless": null,
                "wlcs": null,
                "routing": "INF-300"
            }
        ],
        "services": [
            {
                "service1": "SER-040",
                "service2": null,
                "service3": null
            }
        ]
    }
]

//------------------------------------------------------------------------//
//question2
//------------------------------------------------------------------------//
const question2 = [
    {
        "id": "Q02-110",
        "label": "Switching solution",
        "help": "Leave this option selected to include Cisco DNA recommendations for swtiching.",
        "q_id": "Q2",
        "q_cat": "Q2-CAT1"
    },
    {
        "id": "Q02-120",
        "label": "Wireless solution",
        "help": "Leave this option selected to include Cisco DNA recommendations for wireless.",
        "q_id": "Q2",
        "q_cat": "Q2-CAT1"
    },
    {
        "id": "Q02-130",
        "label": "Routing solution",
        "help": "Leave this option selected if you have a campus routing network and do not need SD-WAN functionality.",
        "q_id": "Q2",
        "q_cat": "Q2-CAT1"
    },
    {
        "id": "Q02-140",
        "label": "SD-WAN solution",
        "help": "Leave this option selected if you need to securely interconnect geographically distributed campuses, branches, data centers, SaaS providers, and public cloud.",
        "q_id": "Q2",
        "q_cat": "Q2-CAT1"
    },
    {
        "id": "Q02-210",
        "label": "We have or will have more than two user virtual private networks (VPNs) on our network.",
        "help": "Select this option if your network uses multiple user VPNs, or your user VPN use is expected to grow over time. You will need advanced software capabilities.",
        "q_id": "Q2",
        "q_cat": "Q2-CAT2"
    },
    {
        "id": "Q02-310",
        "label": "We’re already running Cisco Identity Services Engine (ISE) on our network.",
        "help": "Cisco ISE helps you segment and authenticate users and devices on your network. If you already have ISE licenses on your wired or wireless network, select this option.",
        "q_id": "Q2",
        "q_cat": "Q2-CAT2"
    },
    {
        "id": "Q02-410",
        "label": "We’re already running Cisco Secure Network Analytics (formerly Cisco Stealthwatch) on our network.",
        "help": "Cisco Secure Network Analytics helps you see encrypted malware in your wired network traffic. If you already have a Secure Network Analytics license for your switches, select this option.",
        "q_id": "Q2",
        "q_cat": "Q2-CAT2"
    },
    {
        "id": "Q02-510",
        "label": "We’re already running Cisco Umbrella SIG Essentials on our network.",
        "help": "Select this option if you already have multilayer cloud security for SASE. If you don’t choose this option, we will add it to your Cisco DNA Software recommendation.",
        "q_id": "Q2",
        "q_cat": "Q2-CAT2"
    }
]

//------------------------------------------------------------------------//
//solution
//------------------------------------------------------------------------//
const solution = [
    {
        "category": "SOL-010",
        "content": [
            {
                "title": "Assurance",
                "m_title": "Cisco DNA Assurance",
                "description": "Cisco DNA Assurance provides deep visibility into network devices, users, services, and applications for contextual insights, proactive issue detection, fast root cause analysis, and guided remediation, to ensure consistent network performance and user experiences.",
                "photo": "results_icon_solution_assurance.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/solutions/enterprise-networks/dna-analytics-assurance.html",
                "button_2": null,
                "button_url_2": null,
                "photo_2": "results_icon_solution_assurance.png",
            }
        ]
    },
    {
        "category": "SOL-020",
        "content": [
            {
                "title": "Automation",
                "m_title": "Cisco DNA Automation",
                "description": "Cisco DNA Automation helps improve efficiency, reduce human error, and lower operating expenses by automating the onboarding, configuring, managing, testing, deploying, updating, and operating of physical and virtual devices within a network.",
                "photo": "results_icon_solution_automation.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/solutions/enterprise-networks/dna-automation.html",
                "button_2": null,
                "button_url_2": null,
                "photo_2": "results_icon_solution_automation.png",
            }
        ]
    },
    {
        "category": "SOL-030",
        "content": [
            {
                "title": "SD-Access",
                "m_title": "Cisco SD-Access",
                "description": "Cisco Software-Defined Access (SD-Access) scales and secures user and device network access based on defined policies. It segments the network into groups of users with similar needs and roles to enforce separation of traffic streams in the campus and branch, and extends this separation to Cisco data center and cloud solutions.",
                "photo": "results_icon_solution_sdaccess.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/solutions/enterprise-networks/software-defined-access/index.html",
                "button_2": null,
                "button_url_2": null,
                "photo_2": "results_icon_solution_sdaccess.png",
            }
        ]
    },
    {
        "category": "SOL-040",
        "content": [
            {
                "title": "SD-WAN",
                "m_title": "Cisco SD-WAN",
                "description": "Cisco SD-WAN securely interconnects geographically distributed campuses, branches, data centers, SaaS providers, and public clouds to simplify operations, reduce costs, and improve user experiences.",
                "photo": "results_icon_solution_sdwan.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/solutions/enterprise-networks/sd-wan/index.html",
                "button_2": null,
                "button_url_2": null,
                "photo_2": "results_icon_solution_sdwan.png",
            }
        ]
    },
    {
        "category": "SOF-110",
        "content": [
            {
                "title": "Cisco DNA Essentials",
                "m_title": "Cisco DNA Essentials for Switching",
                "description": "This software subscription gives you centralized management, base automation, and monitoring.",
                "photo": "results_icon_software.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/software/dna-subscription-switching/index.html",
                "button_2": null,
                "button_url_2": null
            }
        ]
    },
    {
        "category": "SOF-120",
        "content": [
            {
                "title": "Cisco DNA Advantage",
                "m_title": "Cisco DNA Advantage for Switching",
                "description": "This software subscription gives you centralized management, advanced automation, and assurance capabilities with artificial intelligence (AI) and machine learning (ML) analytics, location services with Cisco DNA Spaces, and policy-based automation with SD-Access capabilities (assuming Cisco Identity Services Engine [ISE] licenses are purchased separately).",
                "photo": "results_icon_software.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/software/dna-subscription-switching/index.html",
                "button_2": null,
                "button_url_2": null
            }
        ]
    },
    {
        "category": "SOF-130",
        "content": [
            {
                "title": "Cisco DNA Premier",
                "m_title": "Cisco DNA Premier for Switching",
                "description": "This software subscription gives you centralized management, advanced automation and assurance, and SD-Access capabilities. It also provides a Cisco Identity Services Engine (ISE) license for SD-Access and a Cisco Secure Network Analytics (formerly Cisco Stealthwatch) license for advanced security features.",
                "photo": "results_icon_software.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/software/dna-subscription-switching/index.html",
                "button_2": null,
                "button_url_2": null
            }
        ]
    },
    {
        "category": "SOF-210",
        "content": [
            {
                "title": "Cisco DNA Essentials",
                "m_title": "Cisco DNA Essentials for Wireless",
                "description": "This software subscription gives you centralized management, basic automation, basic assurance, telemetry, element management, and basic security.",
                "photo": "results_icon_software.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/software/dna-subscription-wireless/index.html",
                "button_2": null,
                "button_url_2": null
            }
        ]
    },
    {
        "category": "SOF-220",
        "content": [
            {
                "title": "Cisco DNA Advantage",
                "m_title": "Cisco DNA Advantage for Wireless",
                "description": "This software subscription gives you advanced automation, assurance with artificial intelligence (AI) and machine learning (ML) analytics, location services with Cisco DNA Spaces, and SD-Access capabilities (assuming Cisco Identity Services Engine [ISE] licenses are purchased separately).",
                "photo": "results_icon_software.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/software/dna-subscription-wireless/index.html",
                "button_2": null,
                "button_url_2": null
            }
        ]
    },
    {
        "category": "SOF-230",
        "content": [
            {
                "title": "Cisco DNA Premier",
                "m_title": "Cisco DNA Premier for Wireless",
                "description": "This software subscription gives you advanced automation, assurance with artificial intelligence (AI) and machine learning (ML) analytics, and location services with Cisco DNA Spaces. It also provides necessary Cisco Identity Services Engine (ISE) licenses for SD-Access.",
                "photo": "results_icon_software.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/software/dna-subscription-wireless/index.html",
                "button_2": null,
                "button_url_2": null
            }
        ]
    },
    {
        "category": "SOF-310",
        "content": [
            {
                "title": "Cisco DNA Essentials",
                "m_title": "Cisco DNA Essentials for SD-WAN and Routing",
                "description": "This software subscription gives you essential routing automation and assurance capabilities and centralized, secure SD-WAN management. It is optimized for cloud connectivity with hybrid WAN connectivity and application-aware policies.",
                "photo": "results_icon_software.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/software/dna-subscription-wan/index.html",
                "button_2": null,
                "button_url_2": null
            }
        ]
    },
    {
        "category": "SOF-320",
        "content": [
            {
                "title": "Cisco DNA Advantage",
                "m_title": "Cisco DNA Advantage for SD-WAN and Routing",
                "description": "This software subscription gives you advanced routing automation and assurance capabilities, and SD-WAN with enhanced security featuring Cisco malware defense (formerly Cisco AMP for Networks) with SSL proxy and URL filtering, plus a single centralized management console, vAnalytics, and Cloud OnRamp for IaaS, SaaS, and Colocation.",
                "photo": "results_icon_software.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/software/dna-subscription-wan/index.html",
                "button_2": null,
                "button_url_2": null
            }
        ]
    },
    {
        "category": "SOF-330",
        "content": [
            {
                "title": "Cisco DNA Premier",
                "m_title": "Cisco DNA Premier for SD-WAN and Routing",
                "description": "This software subscription gives you advanced routing automation and assurance capabilities, and SD-WAN with exceptional security featuring Cisco Umbrella SIG Essentials and Cisco Secure Malware Analytics (formerly Cisco Threat Grid), plus a single centralized management console, vAnalytics, and Cloud OnRamp for IaaS, SaaS, and Colocation.",
                "photo": "results_icon_software.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/software/dna-subscription-wan/index.html",
                "button_2": null,
                "button_url_2": null
            }
        ]
    },
    {
        "category": "APP-010",
        "content": [
            {
                "title": "Cisco DNA Center appliance",
                "m_title": "Cisco DNA Center appliance",
                "description": "Cisco DNA Center--running on the Cisco DNA Center appliance--is the network controller and command center for Cisco DNA. Use advanced artificial intelligence (AI) and machine learning (ML) to proactively monitor, troubleshoot, and optimize your network.",
                "photo": "product_appliance.jpg",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center/index.html",
                "button_2": null,
                "button_url_2": null,
                "description_modal": "Cisco DNA Center is the foundational controller and analytics platform at the heart of Cisco’s intent-based network for large and midsize organizations. Cisco DNA Center provides a single dashboard for every fundamental management task to simplify running your network. With this platform, IT can respond to changes and challenges faster and more intelligently.",
            }
        ]
    },
    {
        "category": "APP-020",
        "content": [
            {
                "title": "Cisco Identity Services Engine",
                "m_title": "Cisco Identity Services Engine",
                "description": "Cisco Identity Services Engine (ISE)--running inside an appliance or as a virtual machine--is part of the Cisco SD-Access solution and authenticates, authorizes, and groups information as endpoints attempt to connect, so network devices can enforce access policies dynamically.",
                "photo": "product_ise.jpg",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/security/identity-services-engine/index.html",
                "button_2": null,
                "button_url_2": null,
                "description_modal": "Cisco ISE allows you to provide highly secure network access to users and devices. It helps you gain visibility into what is happening in your network, such as who is connected, which applications are installed and running, and much more. It also shares vital contextual data, such as user and device identities, threats, and vulnerabilities with integrated solutions from Cisco technology partners, so you can identify, contain, and remediate threats faster.<br><br>ISE enforces policies that define easy, flexible access rules that meet your ever-changing business requirements. All of this is controlled from a central location that distributes enforcement across the entire network and security infrastructure.",
            }
        ]
    },
    {
        "category": "INF-100",
        "content": [
            {
                "title": "Cisco Catalyst 9000 family switches",
                "m_title": "Catalyst 9000 family switches",
                "description": "The Cisco Catalyst 9000 family of switches contains the next generation of enterprise-class switches built for security, Internet of Things (IoT), mobility, and multicloud. The switches provide superior high availability and industry-leading security features for next-generation enterprise network designs. Wired and wireless security and application visibility are built into the switches.",
                "photo": "product_switches.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/solutions/enterprise-networks/catalyst-9000.html",
                "button_2": "Find and compare switches",
                "button_url_2": "https://www.cisco.com/c/en/us/products/switches/switch-selector.html"
            }
        ]
    },
    {
        "category": "INF-210",
        "content": [
            {
                "title": "Cisco Catalyst 9100 access points",
                "m_title": "Catalyst 9100 access points",
                "description": "The Cisco Catalyst 9100 access points can handle the challenges of the next-generation network, going beyond the Wi-Fi 6 (802.11ax) standard. Catalyst 9100 access points are resilient and intelligent and provide integrated security for your mobile clients as well as your IoT devices.",
                "photo": "product_wireless.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/wireless/catalyst-9100ax-access-points/index.html",
                "button_2": "Find and compare access points",
                "button_url_2": "https://www.cisco.com/c/en/us/products/wireless/access-point-controller-selector.html"
            }
        ]
    },
    {
        "category": "INF-220",
        "content": [
            {
                "title": "Cisco Catalyst 9800 Series wireless controllers",
                "m_title": "Catalyst 9800 Series wireless controllers",
                "description": "The Catalyst 9800 Series wireless controllers combine RF excellence with Cisco IOS XE benefits. These are among the industry's most reliable and highly secure controllers, ready to deploy anywhere--including the cloud of your choice. They are compatible with the Catalyst 9100 Series access points that support Wi-Fi&nbsp;6.",
                "photo": "product_wlcs.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/wireless/catalyst-9800-series-wireless-controllers/index.html",
                "button_2": "Find and compare WLAN controllers",
                "button_url_2": "https://www.cisco.com/c/en/us/products/wireless/wireless-lan-controller/product-comparison.html"
            }
        ]
    },
    {
        "category": "INF-300",
        "content": [
            {
                "title": "Cisco Catalyst 8000 Edge Platforms Family and Cisco enterprise routers",
                "m_title": "Catalyst 8000 Edge Platforms Family and Cisco enterprise routers",
                "description": "Cisco routing provides intent-based networking (IBN) for the WAN, LAN, and cloud. Network routers include advanced analytics, application optimization, automated provisioning, and integrated security to deliver a complete, proven solution. The Catalyst 8000 Edge Platforms transform the WAN edge by delivering the best of SD-WAN, security, and 5G-ready connectivity across all users, to any cloud, data center, or edge location.",
                "photo": "product_routers.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/products/routers/cloud-edge/index.html",
                "button_2": "Find and compare routers",
                "button_url_2": "https://www.cisco.com/c/en/us/products/routers/router-selector.html"
            }
        ]
    },
    {
        "category": "SER-010",
        "content": [
            {
                "title": "Cisco DNA Center Advise and Implement Service",
                "m_title": "Cisco DNA Center Advise and Implement Service",
                "description": "This service helps ensure rapid deployment of Cisco DNA Center for simplified control of wired and wireless environments. Taking an architectural approach to policy automation and assurance, Cisco experts work with your IT staff to manage, scale, and secure your Cisco DNA Center.",
                "photo": "results_icon_services.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/en/us/solutions/collateral/enterprise-networks/at-a-glance-c45-739527.html",
                "button_2": null,
                "button_url_2": null,
                "description_modal": "Cisco DNA Center Advise and Implement Service helps ensure rapid deployment of DNA Center for simplified control of wired and wireless environments across campus, branch, and WAN. Taking an architectural approach to policy automation and assurance, Cisco experts work with your IT staff to manage, scale, and secure your DNA Center, extending the value of your DNA Center by providing software integration and enhancements. This greatly streamlines operations, with workflow automation across domains, management of heterogeneous networks and IT systems, and integration of business and IT applications.",
            }
        ]
    },
    {
        "category": "SER-020",
        "content": [
            {
                "title": "Cisco SD-WAN Advise and Implement Service",
                "m_title": "Cisco SD-WAN Advise and Implement Service",
                "description": "This service includes strategic planning, implementation, migration, testing, and training to accelerate SD-WAN deployment. Our experts utilize best practices, proven processes, proprietary tools, and validated designs to help reduce risk and disruption and so to help you migrate with high performance, security, and assurance.",
                "photo": "results_icon_services.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/dam/en/us/solutions/collateral/enterprise-networks/sd-wan/nb-06-serv-sd-wan-sol-overview-cte-en.pdf",
                "button_2": null,
                "button_url_2": null,
                "description_modal": "Cisco SD-WAN Advise and Implement Service includes strategic planning, implementation, migration, testing, and training to accelerate deployment of SD-WAN. Our team of experts utilize best practices, proven processes, proprietary tools, and validated designs to help reduce risk and disruption so you can migrate with high performance, security, and assurance. Cisco’s SD-WAN automation tools enable automation of infrastructure provisioning, configurations, and central policy, which reduces workflows from hours to seconds while decreasing OpEx and improving operational efficiency.",
            }
        ]
    },
    {
        "category": "SER-030",
        "content": [
            {
                "title": "Business Critical Services for Cisco DNA",
                "m_title": "Business Critical Services for Cisco DNA",
                "description": "This offering combines advanced analytics, automation, consulting, and machine learning (ML) to help optimize IT while potentially reducing risk and maximizing ROI. Automated and personalized incident management speeds reaction time from hours to minutes, which improves operational efficiency and lowers OpEx.",
                "photo": "results_icon_services.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/m/en_us/solutions/enterprise-networks/sd-wan/infograhics/dna.html",
                "button_2": null,
                "button_url_2": null,
                "description_modal": "Business Critical Services for Cisco DNA combines machine learning, expert consulting, and advanced analytics to help identify risks and prevent issues. Maximize ROI and extract the most value from your Cisco DNA solution with automated incident management that speeds reaction time from hours to minutes. This subscription-based service provides health insights, automated compliance and remediation, expert guidance, and proactive performance recommendations to help improve operational efficiency and reduce OpEx.",
            }
        ]
    },
    {
        "category": "SER-040",
        "content": [
            {
                "title": "CX Pathfinder",
                "m_title": "CX Pathfinder",
                "description": "Get to value faster with Cisco expertise and insights to solve your unique challenges.",
                "photo": "results_icon_services.png",
                "button": "Learn more",
                "button_url": "https://www.cisco.com/c/m/en_us/customer-experience/index/cx-pathfinder.html?ccid=cc001428&oid=otrsas022721",
                "button_2": null,
                "button_url_2": null,
                "description_modal": "Find out how to accelerate and maximize the value of your Cisco technology investment.",
            }
        ]
    }
]

document.addEventListener('DOMContentLoaded', () => {

    $(document).on('click', 'a[href="#"]', function (event) {
        event.preventDefault();
    });

    if (debug) {
        $('body').addClass('debug-css');
    }

    //steps
    const appSplash = $('#app-splash'),
        appHeader = $('#app-header'),
        appQuest1 = $('#app-question-1'),
        appQuest2 = $('#app-question-2'),
        appResult = $('#app-result');

    //text init
    $('#splash-title').text(Splash_Title);
    $('.splash-text').html(Splash_Text + Splash_Text2);
    $('.splash-button').text(Button_Get_Started);
    $('.splash-assurance').text(Splash_Assurance);
    $('.splash-automation').text(Splash_Automation);
    $('.splash-sdaccess').text(Splash_SDAccess);
    $('.splash-sdwan').text(Splash_SDWAN);
    $('#pdfFooter').html(pdfFooter);

    $('#header-title').text(Header_Title);
    $('#contact-cutton .contact-button-text').text(Contact_DD_Default);
    $('.subhead-watch a').text(Button_Demo);
    $('.subhead-watch-2 a').text(Button_Demo2);
    $('.subhead-watch a').attr('href', Button_Demo_Link);
    $('.subhead-download a').text(Button_PDF);
    $('.subhead-download a').attr('href', Button_PDF_Link);

    $('#question-step-1-2').text(QID_1);
    $('#start-over, #start-over2').text(Button_Start_Over);
    $('.text-next').text(Button_Next);

    $('#question-step-2-2').text(QID_2);
    $('#question-step-2-title').text(Q2_Text);
    $('#back-to-1').text(Button_Back);
    $('#finish').text(Button_Finish);

    $('#back-to-2').text(Button_Back);
    $('.tn_resultsIntro').html(Results_Intro);
    $('.tn_resultsSoftware .tn_resultsSectionHeader h3').text(Results_SEC1_Name);
    $('#r1-intro').html(Results_SEC1_Intro);
    $('#r1-disclaim').html(Results_SEC1_Disclaim);
    $('.tn_resultsAppliance h3').text(Results_SEC2_Name);
    $('.tn_resultsInfrastructure h3').text(Results_SEC3_Name);
    $('#r3-disclaim').html(Results_SEC3_Disclaim);
    $('.tn_resultsServices h3').text(Results_SEC4_Name);

    $('#answers-title').text(Answers_Title);
    $('#answers-q1-title').text(Answers_Q1_Title);
    $('#answers-q2-title').text(Answers_Q2_Title);
    $('#answers-q2-2-title').text(Answers_Q2_2_Title);

    $('#result-title').text(Results);

    //------------------------------------------------------------------------//

    //drop
    activePop = null;
    dropClass = $('.drop');
    function closeInactivePop() {
        dropClass.each(function (i) {
            if ($(this).hasClass('active') && i != activePop) {
                $(this).removeClass('active');
            }
        });
        return false;
    }

    dropClass.mouseover(function () {
        activePop = dropClass.index(this);
    });

    dropClass.mouseout(function () {
        activePop = null;
    });

    $(document.body).click(function () {
        closeInactivePop();
    });

    $(".drop-toggle").click(function () {
        $(this).parent(dropClass).toggleClass("active");
    });

    //------------------------------------------------------------------------//

    //splash
    $(document).on('click', '.splash-button, .splash-img', function (event) {
        event.preventDefault();
        appSplash.addClass('d-none');
        appHeader.removeClass('d-none');
        appQuest1.removeClass('d-none');
        //find invis
        $('.question-1-group').each(function (index, el) {
            if ($(this).find('.tn_answer:visible').length == 0) {
                $(this).hide();
            }
        });
    });

    //------------------------------------------------------------------------//

    //question 1

    //create group
    function createQuestion1Group(groupID, groupTitle) {
        let groupTemplate = '<div id="' + groupID + '" class="q-group question-1-group"><h3>' + groupTitle + '</h3><div class="pull"></div></div>';
        $('#question-1').append(groupTemplate);
    }

    //loop cat
    for (key in Q1_Cat) {
        createQuestion1Group(key, Q1_Cat[key]);
    }

    //loop drop-menu
    for (key in dropLinks) {
        let dropLinkText = dropLinks[key].text,
            dropLinkURL = dropLinks[key].url,
            dropLinkButton = dropLinks[key].button,
            dropLinkBlank = dropLinks[key].blank;

        if (dropLinkButton) {
            dropLinkButton = ' class="tn_capsuleButton tn_capsuleButtonSolid"';
        } else {
            dropLinkButton = '';
        }

        if (dropLinkBlank) {
            dropLinkBlank = ' target="_blank"';
        } else {
            dropLinkBlank = '';
        }

        $('#drop-menu').append('<li><a href="' + dropLinkURL + '" ' + dropLinkButton + dropLinkBlank + '>' + dropLinkText + '</a></li>');
    }

    function createQuestion1List(thisID, thisLabel, thisHelp, thisCat, thisShow1, thisShow2, thisSolution) {

        let listTooltip = '';
        if (thisHelp) {
            listTooltip = '<div class="tn_answerInfo"><a href="#"></a><div class="tn_toolTip"><p>' + thisHelp + '</p><div class="tn_toolTipTailContainer"><div class="tn_toolTipTail"></div></div></div></div>';
        }

        let showArr = thisSolution.split(', '),
            newshowArr = [];
        for (key in showArr) {
            newshowArr.push('show-' + showArr[key]);
        }
        newshowArr = newshowArr + '';
        newshowArr = newshowArr.replace(',', ' ');

        let listTemplate = '<div class="tn_answer ' + newshowArr + '"><input type="checkbox" class="tn_checkbox" id="' + thisID + '" name="' + thisID + '" data-show1="' + thisShow1 + '" data-show2="' + thisShow2 + '"><div class="tn_answerText"><label for="' + thisID + '">' + thisLabel + '</label>' + listTooltip + '</div></div>';

        $('#' + thisCat).find('.pull').append(listTemplate);
    }

    //loop JSON Question 1
    for (key in question1) {
        let questionItem = question1[key],
            thisID = questionItem['id'],
            thisLabel = questionItem['label'],
            thisHelp = questionItem['help'],
            thisCat = questionItem['q_cat'],
            thisShow1 = questionItem['q_show_q2_1'],
            thisShow2 = questionItem['q_show_q2_2'],
            thisSolution = questionItem['solution'];

        createQuestion1List(thisID, thisLabel, thisHelp, thisCat, thisShow1, thisShow2, thisSolution);
    }

    const goStep2 = $('#go-step-2');

    $('#question-1 .tn_checkbox').on('change', function (event) {
        event.preventDefault();

        let checkedLength = $('#question-1 .tn_checkbox:checked').length;

        if (checkedLength > UpTo) {
            alert(UpToAlert + ' (' + UpTo + ').');
            $(this).prop('checked', false);
        }

        if (checkedLength) {
            goStep2.removeClass('tn_capsuleButtonGrayedOut');
        } else {
            goStep2.addClass('tn_capsuleButtonGrayedOut');
        }
    });

    let inputRequired_Q02_110 = false;

    let checked1Pull = [],
        checked2Pull = [];
    let question1Results = [];
    $(document).on('click', '#go-step-2:not(".tn_capsuleButtonGrayedOut")', function (event) {
        event.preventDefault();
        appQuest1.addClass('d-none');
        appQuest2.removeClass('d-none');

        checked1Pull = [],
            checked2Pull = [];

        $('#question-1 .tn_checkbox:checked').each(function (index, el) {
            let dataShow1 = $(el).data('show1'),
                dataShow2 = $(el).data('show2');

            if (dataShow1) {
                dataShow1 = dataShow1.split(',');
                checked1Pull = checked1Pull.concat(dataShow1);
            }

            if (dataShow2) {
                dataShow2 = dataShow2.split(',');
                checked2Pull = checked2Pull.concat(dataShow2);
            }
        });

        checked1Pull = JSON.stringify(checked1Pull).replace(/\[|\]|\"|\;|\:|\s/g, '');
        checked1Pull = checked1Pull.split(',');
        checked1Pull = checked1Pull.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });

        checked2Pull = JSON.stringify(checked2Pull).replace(/\[|\]|\"|\;|\:|\s/g, '');
        checked2Pull = checked2Pull.split(',');
        checked2Pull = checked2Pull.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });

        if (debug) {
            console.log('#question-1-1 show = ' + checked1Pull + ' length: ' + checked1Pull.length);
            console.log('#question-1-2 show = ' + checked2Pull);
        }

        $('#question-2').find('.tn_answer').addClass('d-none').find('input').prop('checked', false);

        if (checked1Pull != '') {
            for (let i = 0; i < checked1Pull.length; i++) {
                let currentID = checked1Pull[i].replace(/\s+/g, '');
                $('input#' + currentID).parents('.tn_answer').removeClass('d-none').find('input').prop('checked', true);
            }
        }

        if (checked2Pull != '') {
            for (let i = 0; i < checked2Pull.length; i++) {
                let currentID = checked2Pull[i].replace(/\s+/g, '');
                $('input#' + currentID).parents('.tn_answer').removeClass('d-none');
            }
        }

        checkCat();

        question1Results = returnChecked('#question-1');
        question1Results = question1Results.split(',');

        let rSolutionTemporary = [];
        for (let i = 0; i < question1Results.length; i++) {
            for (key in question1) {
                if (question1[key]['id'] == question1Results[i]) {
                    let splittedSolutions = question1[key]['solution'].split(', ');
                    for (let s = 0; s < splittedSolutions.length; s++) {
                        rSolutionTemporary = rSolutionTemporary.concat(splittedSolutions);
                    }
                    rSolutionTemporary.sort();
                }
            }
        }
        rSolutionTemporary = rSolutionTemporary.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });

        if (rSolutionTemporary.indexOf('SOL-030') != -1) {
            inputRequired_Q02_110 = true;
        } else {
            inputRequired_Q02_110 = false;
        }


        if (debug) {
            console.log('question1Results: ' + question1Results);
            console.log('rSolutionTemporary: ' + rSolutionTemporary);
        }

        if (checked1Pull.length < 2) {
            $('#Q2-CAT1').addClass('d-none');
        } else {
            $('#Q2-CAT1').removeClass('d-none');
        }

        if ($('body').hasClass('show-sd-access')) {
            //console.log(question1Results, question1Results.indexOf('Q01-330') != -1);
            if (question1Results.indexOf('Q01-330') != -1) {
                $('#Q02-140').prop("checked", false);
                $('#Q02-140').parents('.tn_answer').hide();
            } else {
                $('#Q02-140').prop("checked", true);
                $('#Q02-140').parents('.tn_answer').show();
            }
        }



        if ($('#question-2').innerHeight() == 0) {
            //empty
            $('#finish').trigger('click');
        }

    });

    $(document).on('click', '#Q02-110', function (event) {
        if (!$(this).is(':checked') && inputRequired_Q02_110) {
            event.preventDefault();
            alert('Based upon your answer(s) to Question 1, a switching solution is required.');
        }
    });

    function refreshStep1() {
        $('#question-1 .tn_checkbox').each(function (index, el) {
            $(el).prop('checked', false);
        });
    }

    $(document).on('click', '#start-over, #start-over2', function (event) {
        event.preventDefault();
        goStep2.addClass('tn_capsuleButtonGrayedOut');
        refreshStep1();
        refreshStep2();
        refreshStepR();
        appSplash.removeClass('d-none');
        appHeader.addClass('d-none');
        appQuest1.addClass('d-none');
        appQuest2.addClass('d-none');
        appResult.addClass('d-none');
        question1Results = [];
        question2Results = [];
        $('.question-1-group').each(function (index, el) {
            $(this).show();
        });
        $('body').removeClass('show-result-body');
    });

    //------------------------------------------------------------------------//

    //question 2

    //create group
    function createQuestion2Group(groupID, groupTitle) {
        let groupTemplateNote = '';
        if (Q2_Cat1_Note != '') {
            groupTemplateNote = '<div class="tn_answerInfo"><a href="#"></a><div class="tn_toolTip"><p>' + Q2_Cat1_Note + '</p><div class="tn_toolTipTailContainer"><div class="tn_toolTipTail"></div></div></div></div>';
        }

        let groupTemplate = '<div id="' + groupID + '" class="q-group question-2-group"><h3>' + groupTitle + groupTemplateNote + '</h3><div class="pull"></div></div>';
        $('#question-2').append(groupTemplate);
    }

    //loop cat
    for (key in Q2_Cat) {
        createQuestion2Group(key, Q2_Cat[key]);
    }

    function createQuestion2List(thisID, thisLabel, thisHelp, thisCat) {

        let listTooltip = '';
        if (thisHelp) {
            listTooltip = '<div class="tn_answerInfo"><a href="#"></a><div class="tn_toolTip"><p>' + thisHelp + '</p><div class="tn_toolTipTailContainer"><div class="tn_toolTipTail"></div></div></div></div>';
        }

        let checkedState = '',
            visibilityState = '';
        if (thisCat == 'Q2-CAT1') {
            checkedState = 'checked';
        } else if (thisCat == 'Q2-CAT2') {
            visibilityState = 'd-none';
        }

        let listTemplate = '<div class="tn_answer ' + visibilityState + '"><input type="checkbox" class="tn_checkbox" id="' + thisID + '" name="' + thisID + '"><div class="tn_answerText"><label for="' + thisID + '">' + thisLabel + '</label>' + listTooltip + '</div></div>';

        $('#' + thisCat).find('.pull').append(listTemplate);
    }

    //loop JSON Question 2
    for (key in question2) {
        let questionItem = question2[key],
            thisID = questionItem['id'],
            thisLabel = questionItem['label'],
            thisHelp = questionItem['help'],
            thisCat = questionItem['q_cat'];

        createQuestion2List(thisID, thisLabel, thisHelp, thisCat);
    }

    function checkCat() {
        $('.pull').each(function (index, el) {
            let dLength = $(el).find('.tn_answer:not(".d-none")').length;
            if (dLength) {
                $(el).parents('.q-group').removeClass('d-none');
            } else {
                $(el).parents('.q-group').addClass('d-none');
            }

            let q2cat2 = '#Q2-CAT2';

            let groupTemplateNote2 = '';

            if (Q2_Cat2_Note != '') {
                groupTemplateNote2 = '<div class="tn_answerInfo"><a href="#"></a><div class="tn_toolTip"><p>' + Q2_Cat2_Note + '</p><div class="tn_toolTipTailContainer"><div class="tn_toolTipTail"></div></div></div></div>';
            }

            if ($(el).parents(q2cat2).length && dLength < 2) {
                $(q2cat2).find('h3').html(Q2_CAT2_Single + groupTemplateNote2);
            } else if ($(el).parents(q2cat2).length) {
                $(q2cat2).find('h3').html(Q2_CAT2_Multiple + groupTemplateNote2);
            }

            $('#Q2-CAT2 .tn_answerInfo').each(function (index, el) {
                new Tooltip($(this), {
                    placement: 'top',
                    title: $(this).find('.tn_toolTip').text(),
                    trigger: 'click',
                    closeOnClickOutside: true
                });
            });

        });
    }
    checkCat();

    function refreshStep2() {
        $('#question-2 .tn_checkbox').each(function (index, el) {
            $(el).prop('checked', false);
        });
        // $('#question-2').find('.q-group').eq(0).find('.tn_checkbox').each(function(index, el) {
        //     $(el).prop('checked', true);
        // });
    }

    $(document).on('click', '#back-to-1', function (event) {
        event.preventDefault();
        appQuest1.removeClass('d-none');
        appQuest2.addClass('d-none');
        refreshStep2();
        checkCat();
        question2Results = [];
    });

    $('#Q2-CAT1 .tn_checkbox').on('change', function (event) {
        event.preventDefault();
        let checkedLength = $('#Q2-CAT1 .tn_checkbox:checked').length;
        if (checkedLength) {
            $('#finish').removeClass('tn_capsuleButtonGrayedOut');
        } else {
            $('#finish').addClass('tn_capsuleButtonGrayedOut');
        }
    });

    let question2Results = [];
    $(document).on('click', '#finish:not(".tn_capsuleButtonGrayedOut")', function (event) {
        event.preventDefault();
        appQuest2.addClass('d-none');
        appResult.removeClass('d-none');

        question2Results = returnChecked('#question-2');

        // question1Results = 'Q01-110,Q01-230,Q01-310,Q01-410,Q01-510';
        // question2Results = 'Q02-110,Q02-120,Q02-130,Q02-140,Q02-210,Q02-310';

        if (debug) {
            console.log('question2Results: ' + question2Results);
        }

        let rSolution = [],

            rSoftwareSwitching = 0,
            rSoftwareWireless = 0,
            rSoftwareRouting = 0,

            rApplianceProduct1 = 0,
            rApplianceProduct2 = 0,
            rApplianceProduct3 = 0,

            rInfrastructureSwitching = 0,
            rInfrastructureWireless = 0,
            rInfrastructureWlcs = 0,
            rInfrastructureRouting = 0,

            rServicesService1 = 0,
            rServicesService2 = 0,
            rServicesService3 = 0;

        //build results
        for (let i = 0; i < question1Results.length; i++) {
            for (key in question1) {
                if (question1[key]['id'] == question1Results[i]) {

                    let splittedSolutions = question1[key]['solution'].split(', ');
                    for (let s = 0; s < splittedSolutions.length; s++) {
                        rSolution = rSolution.concat(splittedSolutions);
                    }

                    rSolution.sort();

                    rSoftwareSwitching = returnMax(rSoftwareSwitching, question1[key]['software'][0]['switching']);
                    rSoftwareWireless = returnMax(rSoftwareWireless, question1[key]['software'][0]['wireless']);
                    rSoftwareRouting = returnMax(rSoftwareRouting, question1[key]['software'][0]['routing']);

                    rApplianceProduct1 = returnMax(rApplianceProduct1, question1[key]['appliance'][0]['product1']);
                    rApplianceProduct2 = returnMax(rApplianceProduct2, question1[key]['appliance'][0]['product2']);
                    rApplianceProduct3 = returnMax(rApplianceProduct3, question1[key]['appliance'][0]['product3']);

                    rInfrastructureSwitching = returnMax(rInfrastructureSwitching, question1[key]['infrastructure'][0]['switching']);
                    rInfrastructureWireless = returnMax(rInfrastructureWireless, question1[key]['infrastructure'][0]['wireless']);
                    rInfrastructureWlcs = returnMax(rInfrastructureWlcs, question1[key]['infrastructure'][0]['wlcs']);
                    rInfrastructureRouting = returnMax(rInfrastructureRouting, question1[key]['infrastructure'][0]['routing']);

                    rServicesService1 = returnMax(rServicesService1, question1[key]['services'][0]['service1']);
                    rServicesService2 = returnMax(rServicesService2, question1[key]['services'][0]['service2']);
                    rServicesService3 = returnMax(rServicesService3, question1[key]['services'][0]['service3']);
                }
            }
        }

        //remove duplicates
        rSolution = rSolution.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });

        if (debug) {
            console.log('First-----------------------------------');
            console.log('rSolution: ' + rSolution + ' type: ' + typeof rSolution);
            console.log(rSolution);
            console.log('-----------------------------------');
            console.log('rSoftwareSwitching: ' + rSoftwareSwitching);
            console.log('rSoftwareWireless: ' + rSoftwareWireless);
            console.log('rSoftwareRouting: ' + rSoftwareRouting);
            console.log('-----------------------------------');
            console.log('rApplianceProduct1: ' + rApplianceProduct1);
            console.log('rApplianceProduct2: ' + rApplianceProduct2);
            console.log('rApplianceProduct3: ' + rApplianceProduct3);
            console.log('-----------------------------------');
            console.log('rInfrastructureSwitching: ' + rInfrastructureSwitching);
            console.log('rInfrastructureWireless: ' + rInfrastructureWireless);
            console.log('rInfrastructureWlcs: ' + rInfrastructureWlcs);
            console.log('rInfrastructureRouting: ' + rInfrastructureRouting);
            console.log('-----------------------------------');
            console.log('rServicesService1: ' + rServicesService1);
            console.log('rServicesService2: ' + rServicesService2);
            console.log('rServicesService3: ' + rServicesService3);
            console.log('-----------------------------------');
        }

        //dependencies
        const dep1 = question1Results.indexOf('Q01-210'),
            dep2 = question1Results.indexOf('Q01-220'),
            dep3 = question1Results.indexOf('Q01-230'),
            dep4 = question2Results.indexOf('Q02-310'),
            dep5 = question1Results.indexOf('Q01-320'),
            dep6 = question1Results.indexOf('Q01-330'),
            dep7 = question2Results.indexOf('Q02-410'),
            dep8 = question2Results.indexOf('Q02-210'),
            dep9 = question2Results.indexOf('Q02-110'),
            dep10 = question2Results.indexOf('Q02-120'),
            dep11 = question2Results.indexOf('Q02-130'),
            dep12 = question2Results.indexOf('Q02-140'),
            dep13 = question2Results.indexOf('Q02-510');

        //( Q01-210 || Q01-220 || Q01-230 ) && Q02-310
        if ((dep1 != -1 || dep2 != -1 || dep3 != -1) && dep4 != -1) {
            if (debug) {
                console.log('Condition 1: ( Q01-210 || Q01-220 || Q01-230 ) && Q02-310');
                console.log('SOF-130 (' + rSoftwareSwitching + ') to SOF-120');
                console.log('SOF-230 (' + rSoftwareWireless + ') to SOF-220');
                console.log('***');
            }
            rSoftwareSwitching = 120;
            rSoftwareWireless = 220;
            rApplianceProduct2 = null;
        }

        //( Q01-320 || Q01-330 ) && Q02-410
        if ((dep5 != -1 || dep6 != -1) && dep7 != -1) {
            if (debug) {
                console.log('Condition 2: ( Q01-320 || Q01-330 ) && Q02-410');
                console.log('SOF-130 (' + rSoftwareSwitching + ') to SOF-120');
                console.log('***');
            }
            rSoftwareSwitching = 120;
        }

        //Q02-210
        if (dep8 != -1 && rSoftwareRouting == '310') {
            if (debug) {
                console.log('Condition 3: Q02-210');
                console.log('SOF-310 (' + rSoftwareRouting + ') to SOF-320');
                console.log('***');
            }
            rSoftwareRouting = 320;
        }

        //Q02-510
        if (dep13 != -1 && rSoftwareRouting == '330') {
            if (debug) {
                console.log('Condition 4: Q02-510');
                console.log('SOF-330 (' + rSoftwareRouting + ') to SOF-320');
                console.log('***');
            }
            rSoftwareRouting = 320;
        }

        //visible & not selected
        let isVisibleAndSelect_Q02_110 = $('.tn_answer:not(".d-none") #Q02-110').is(':checked'),
            isVisibleAndSelect_Q02_120 = $('.tn_answer:not(".d-none") #Q02-120').is(':checked'),
            isVisibleAndSelect_Q02_130 = $('.tn_answer:not(".d-none") #Q02-130').is(':checked'),
            isVisibleAndSelect_Q02_140 = $('.tn_answer:not(".d-none") #Q02-140').is(':checked');

        Array.prototype.remove = function (index) {
            this.splice(index, 1);
        }

        if (!isVisibleAndSelect_Q02_110 && !isVisibleAndSelect_Q02_120 && !isVisibleAndSelect_Q02_130) {
            if (debug) { console.log('!isVisibleAndSelect_Q02_110 && !isVisibleAndSelect_Q02_120 && !isVisibleAndSelect_Q02_130'); }

            if (rSolution.indexOf('SOL-010') != -1) {
                rSolution.remove(rSolution.indexOf('SOL-010'));
            }
            if (rSolution.indexOf('SOL-020') != -1) {
                rSolution.remove(rSolution.indexOf('SOL-020'));
            }
            if (rSolution.indexOf('SOL-030') != -1) {
                rSolution.remove(rSolution.indexOf('SOL-030'));
            }
            rApplianceProduct1 = 0;
        }

        if (!isVisibleAndSelect_Q02_140) {
            if (debug) { console.log('!isVisibleAndSelect_Q02_140'); }

            if (rSolution.indexOf('SOL-040') != -1) {
                rSolution.remove(rSolution.indexOf('SOL-040'));
            }
        }

        if (!isVisibleAndSelect_Q02_110) {
            if (debug) { console.log('!isVisibleAndSelect_Q02_110'); }
            rSoftwareSwitching = 0;
            rInfrastructureSwitching = 0;
        }

        if (!isVisibleAndSelect_Q02_120) {
            if (debug) { console.log('!isVisibleAndSelect_Q02_120'); }
            rSoftwareWireless = 0;
            rInfrastructureWireless = 0;
            rInfrastructureWlcs = 0;
        }

        if (!isVisibleAndSelect_Q02_130 && !isVisibleAndSelect_Q02_140) {
            if (debug) { console.log('!isVisibleAndSelect_Q02_130 && !isVisibleAndSelect_Q02_140'); }
            rSoftwareRouting = 0;
            rInfrastructureRouting = 0;
        }

        if (debug) {
            console.log('Updated values');
            console.log('rSolution: ' + rSolution + ' type: ' + typeof rSolution);
            console.log(rSolution);
            console.log('rSoftwareSwitching: ' + rSoftwareSwitching);
            console.log('rSoftwareWireless: ' + rSoftwareWireless);
            console.log('rSoftwareRouting: ' + rSoftwareRouting);
            console.log('rApplianceProduct1: ' + rApplianceProduct1);
            console.log('rApplianceProduct2: ' + rApplianceProduct2);
            console.log('rApplianceProduct3: ' + rApplianceProduct3);
            console.log('rInfrastructureSwitching: ' + rInfrastructureSwitching);
            console.log('rInfrastructureWireless: ' + rInfrastructureWireless);
            console.log('rInfrastructureWlcs: ' + rInfrastructureWlcs);
            console.log('rInfrastructureRouting: ' + rInfrastructureRouting);
            console.log('rServicesService1: ' + rServicesService1);
            console.log('rServicesService2: ' + rServicesService2);
            console.log('rServicesService3: ' + rServicesService3);
            console.log('**************************');
        }

        createAnswerModal();
        printSolutions(rSolution);
        printSoftware(rSoftwareSwitching, rSoftwareWireless, rSoftwareRouting);
        printAppliance(rApplianceProduct1, rApplianceProduct2, rApplianceProduct3);
        printInfrastructure(rInfrastructureSwitching, rInfrastructureWireless, rInfrastructureWlcs, rInfrastructureRouting);
        printServices(rServicesService1, rServicesService2, rServicesService3);

        if (Button_Demo_Show) {
            $('.subhead-watch').removeClass('d-none');
        }

        if (Button_PDF_Show) {
            $('.subhead-download').removeClass('d-none');
        }

        $('#app-result').find('p a:not(".has-d-none-url")').each(function (index, el) {
            $(el).addClass('has-d-none-url');
            $(el).append('<span class="d-none"> (URL: ' + $(el).prop('href') + ')</span>');
        });

        setTimeout(function () {
            $('.loader').addClass('d-none');
            $('.tn_content-loader').fadeIn('300');

            $('body').addClass('show-result-body');
        }, loaderDelay);


    });

    function returnChecked(question) {
        let answersList = [];
        $(question).find('.tn_checkbox:checked').each(function (index, el) {
            let dataShow = $(el).attr('id');

            if (dataShow) {
                dataShow = dataShow.split(',');
                answersList = answersList.concat(dataShow);
            }
        });

        answersList = JSON.stringify(answersList).replace(/\[|\]|\"|\;|\:|\s/g, '');

        return answersList;
    }

    //------------------------------------------------------------------------//

    //result func

    function createAnswerModal() {
        $('#question-1').find('.tn_checkbox:checked').each(function (index, el) {
            let thisText = $(this).parents('.tn_answer').find('label').text();
            $('#answers-q1-result').append('<li>' + thisText + '</li>')
        });

        $('#Q2-CAT1 .tn_checkbox:checked').each(function (index, el) {
            let thisText = $(this).parents('.tn_answer').find('label').text().replace(' solution', '');
            $('#answers-q2-2-result').append('<li>' + thisText + '</li>')
        });

        $('#Q2-CAT2 .tn_checkbox:checked').each(function (index, el) {
            let thisText = $(this).parents('.tn_answer').find('label').text();
            $('#answers-q2-result').prepend('<li>' + thisText + '</li>')
        });
    }

    function returnMax(defValue, newValue) {
        let maxValue = 0
        if (newValue) {
            newValue = parseInt(newValue.slice(4));
            defValue = parseInt(defValue);
            maxValue = Math.max(defValue, newValue);
        } else {
            maxValue = defValue;
        }

        if (maxValue && maxValue.toString().length == 2) {
            maxValue = '0' + maxValue;
        } else if (maxValue && maxValue.toString().length == 1) {
            maxValue = '00' + maxValue;
        }

        return maxValue;
    }

    function printSolutions(arrSolution) {
        //console.log(arrSolution);
        if (arrSolution.length > 1) {
            $('.areas-text').text(Results_Intro_Multiple);
        } else {
            $('.areas-text').text(Results_Intro_Single);
        }

        if (!arrSolution.length) {
            $('.solution-text-block').addClass('d-none')
        } else {
            $('.solution-text-block').removeClass('d-none')
        }

        let cArr = [];
        switch (arrSolution.length) {
            case 5:
                cArr = ["", ", ", ", ", ", ", ", and "];
                break;
            case 4:
                cArr = ["", ", ", ", ", ", and "];
                break;
            case 3:
                cArr = ["", ", ", ", and "];
                break;
            case 2:
                cArr = ["", " and "];
                break;
            default:
                cArr = [""];
        }

        if (debug) {
            console.log('arrSolution before print: ' + arrSolution);
            console.log('arrSolution.length before print: ' + arrSolution.length);
            console.log('rSolution: ' + arrSolution + ' type: ' + typeof arrSolution);
            console.log(arrSolution);
        }

        for (let i = 0; i < arrSolution.length; i++) {
            for (key in solution) {
                if (solution[key]['category'] == arrSolution[i]) {
                    $('.solution-text').append('<span class="result-m-data">' + cArr[i] + '<a href="#" class="link-modal-product" data-config-metrics-group="results">' + solution[key]['content'][0]['title'] + '</a><div class="result-m-meta d-none" data-button="' + solution[key]['content'][0]['button'] + '" data-buttonurl="' + solution[key]['content'][0]['button_url'] + '" data-button2="' + solution[key]['content'][0]['button_2'] + '" data-buttonurl2="' + solution[key]['content'][0]['button_url_2'] + '" data-photo="' + solution[key]['content'][0]['photo'] + '" data-titlem="' + solution[key]['content'][0]['m_title'] + '" data-description="' + solution[key]['content'][0]['description'] + '"></div></span>');
                    //test new
                    $('.tn_resultsIntroSolutions').append('<li><span class="result-m-data"><a href="#" class="link-modal-product" data-config-metrics-group="results"><img src="https://www.cisco.com/c/dam/m/en_us/solutions/enterprise-networks/solution-builder/images/' + solution[key]['content'][0]['photo_2'] + '" data-src="' + solution[key]['content'][0]['photo_2'] + '" alt=""><br>' + solution[key]['content'][0]['title'] + '</a><div class="result-m-meta d-none" data-button="' + solution[key]['content'][0]['button'] + '" data-buttonurl="' + solution[key]['content'][0]['button_url'] + '" data-button2="' + solution[key]['content'][0]['button_2'] + '" data-buttonurl2="' + solution[key]['content'][0]['button_url_2'] + '" data-photo="' + solution[key]['content'][0]['photo'] + '" data-titlem="' + solution[key]['content'][0]['m_title'] + '" data-description="' + solution[key]['content'][0]['description'] + '"></div></span></li>');
                }
            }
        }
    }

    function printSoftware(w1, w2, w3) {
        const catPrefix = 'SOF-';

        let catList = [];
        if (w1) { w1 = catPrefix + w1; catList.push(w1); }
        if (w2) { w2 = catPrefix + w2; catList.push(w2); }
        if (w3) { w3 = catPrefix + w3; catList.push(w3); }

        if (catList.length) {
            $('.tn_resultsSoftware').removeClass('d-none');
        }

        for (let i = 0; i < catList.length; i++) {
            let thisCat = catList[i];

            for (key in solution) {
                if (solution[key]['category'] == thisCat) {
                    let catSubtitle = solution[key]['category'].slice(4, 5);
                    catSubtitle = parseInt(catSubtitle) - 1;
                    if (catSubtitle == '2' && !($('.tn_answer:not(".d-none") #Q02-130').is(':checked'))) {
                        catSubtitle = 3;
                    } else if (catSubtitle == '2' && !($('.tn_answer:not(".d-none") #Q02-140').is(':checked'))) {
                        catSubtitle = 4;
                    }
                    let catSubtitleText = SEC1Cat[catSubtitle];
                    $('.tn_resultsSoftware .tn_resultsArray').append('<li class="result-m-data"><div class="tn_resultsArrayProduct"><h3><a href="#" class="link-modal-product" data-config-metrics-group="results">' + solution[key]['content'][0]['title'] + '</a></h3></div><div class="tn_resultsArrayCategory">' + catSubtitleText + '</div><div class="result-m-meta d-none" data-button="' + solution[key]['content'][0]['button'] + '" data-buttonurl="' + solution[key]['content'][0]['button_url'] + '" data-button2="' + solution[key]['content'][0]['button_2'] + '" data-buttonurl2="' + solution[key]['content'][0]['button_url_2'] + '" data-photo="' + solution[key]['content'][0]['photo'] + '" data-titlem="' + solution[key]['content'][0]['m_title'] + '" data-description="' + solution[key]['content'][0]['description'] + '"></div></li>');
                }
            }
        }
    }

    function printAppliance(a1, a2, a3) {
        const catPrefix = 'APP-';

        let catList = [];
        if (a1) { a1 = catPrefix + a1; catList.push(a1); }
        if (a2) { a2 = catPrefix + a2; catList.push(a2); }
        if (a3) { a3 = catPrefix + a3; catList.push(a3); }

        if (catList.length) {
            $('.tn_resultsAppliance').removeClass('d-none');
        }

        for (let i = 0; i < catList.length; i++) {
            let thisCat = catList[i];

            for (key in solution) {
                if (solution[key]['category'] == thisCat) {
                    $('.tn_resultsAppliance .tn_resultsContentArea').append('<div class="tn_resultsApplianceItem result-m-data"><div class="tn_resultsApplianceImage"><a href="#" class="link-modal-product" data-config-metrics-group="results"><img src="https://www.cisco.com/c/dam/m/en_us/solutions/enterprise-networks/solution-builder/images/' + solution[key]['content'][0]['photo'] + '" alt="' + solution[key]['content'][0]['title'] + '"></a></div><div class="tn_resultsApplianceText"><h3><a href="#" class="link-modal-product" data-config-metrics-group="results">' + solution[key]['content'][0]['title'] + '</a></h3><p>' + solution[key]['content'][0]['description'] + '</p></div><div class="result-m-meta d-none" data-button="' + solution[key]['content'][0]['button'] + '" data-buttonurl="' + solution[key]['content'][0]['button_url'] + '" data-button2="' + solution[key]['content'][0]['button_2'] + '" data-buttonurl2="' + solution[key]['content'][0]['button_url_2'] + '" data-photo="' + solution[key]['content'][0]['photo'] + '" data-titlem="' + solution[key]['content'][0]['m_title'] + '" data-description="' + solution[key]['content'][0]['description_modal'] + '"></div></div>');
                }
            }
        }
    }

    function printInfrastructure(i1, i2, i3, i4) {
        const catPrefix = 'INF-';

        let catList = [];
        if (i1) { i1 = catPrefix + i1; catList.push(i1); }
        if (i2) { i2 = catPrefix + i2; catList.push(i2); }
        if (i3) { i3 = catPrefix + i3; catList.push(i3); }
        if (i4) { i4 = catPrefix + i4; catList.push(i4); }

        if (catList.length) {
            $('.tn_resultsInfrastructure').removeClass('d-none');
        }

        for (let i = 0; i < catList.length; i++) {
            let thisCat = catList[i];

            for (key in solution) {
                if (solution[key]['category'] == thisCat) {
                    let tecCat = 'TEC-' + solution[key]['category'].slice(4);

                    //console.log('------------tecCat: '+ tecCat);

                    if (tecCat == 'TEC-300' && !($('.tn_answer:not(".d-none") #Q02-130').is(':checked'))) {
                        tecCat = 'TEC-310';
                    } else if (tecCat == 'TEC-300' && !($('.tn_answer:not(".d-none") #Q02-140').is(':checked'))) {
                        tecCat = 'TEC-330';
                    }

                    $('.tn_resultsInfrastructure .tn_resultsArray').append('<li class="result-m-data"><div class="tn_resultsArrayImage"><a href="#" class="link-modal-product" data-config-metrics-group="results"><img src="https://www.cisco.com/c/dam/m/en_us/solutions/enterprise-networks/solution-builder/images/' + solution[key]['content'][0]['photo'] + '" alt="Product Image"></a></div><div class="tn_resultsArrayCategory">' + TEC[tecCat] + ':</div><div class="tn_resultsArrayProduct"><a href="#" class="link-modal-product" data-config-metrics-group="results">' + solution[key]['content'][0]['title'] + '</a></div><div class="result-m-meta d-none" data-button="' + solution[key]['content'][0]['button'] + '" data-buttonurl="' + solution[key]['content'][0]['button_url'] + '" data-button2="' + solution[key]['content'][0]['button_2'] + '" data-buttonurl2="' + solution[key]['content'][0]['button_url_2'] + '" data-photo="' + solution[key]['content'][0]['photo'] + '" data-titlem="' + solution[key]['content'][0]['m_title'] + '" data-description="' + solution[key]['content'][0]['description'] + '"></div></li>');
                }
            }
        }
    }

    function printServices(s1, s2, s3) {
        const catPrefix = 'SER-';

        let catList = [];
        if (s1) { s1 = catPrefix + s1; catList.push(s1); }
        if (s2) { s2 = catPrefix + s2; catList.push(s2); }
        if (s3) { s3 = catPrefix + s3; catList.push(s3); }

        if (catList.length) {
            $('.tn_resultsServices').removeClass('d-none');
        }

        for (let i = 0; i < catList.length; i++) {
            let thisCat = catList[i];

            for (key in solution) {
                if (solution[key]['category'] == thisCat) {
                    $('.tn_resultsServices .tn_resultsContentArea').append('<div class="tn_resultsServicesItem result-m-data"><h3><a class="link-modal-product" data-config-metrics-group="results" href="#">' + solution[key]['content'][0]['title'] + '</a></h3><div class="result-m-meta d-none" data-button="' + solution[key]['content'][0]['button'] + '" data-buttonurl="' + solution[key]['content'][0]['button_url'] + '" data-button2="' + solution[key]['content'][0]['button_2'] + '" data-buttonurl2="' + solution[key]['content'][0]['button_url_2'] + '" data-photo="' + solution[key]['content'][0]['photo'] + '" data-titlem="' + solution[key]['content'][0]['m_title'] + '" data-description="' + solution[key]['content'][0]['description_modal'] + '"></div><p class="result-m-description">' + solution[key]['content'][0]['description'] + '</p></div>');
                }
            }
        }
    }

    function refreshStepR() {
        $('.tn_resultsSoftware, .tn_resultsInfrastructure, .tn_resultsAppliance, .tn_resultsServices').addClass('d-none');
        $('.tn_resultsSoftware .tn_resultsArray').html('');
        $('.tn_resultsInfrastructure .tn_resultsArray').html('');
        $('.tn_resultsAppliance .tn_resultsContentArea').html('');
        $('.tn_resultsServices .tn_resultsContentArea').html('');
        $('.solution-text').html('');
        $('.areas-text').text('');
        $('.tn_resultsIntroSolutions').text('');
        $('#answers-q2-result > li:not("#answers-q2-2-title"), #answers-q2-2-result li, #answers-q1-result li').remove();
        $('.subhead-watch, .subhead-download').addClass('d-none');

        $('.loader').removeClass('d-none');
        $('.tn_content-loader').css({ 'display': 'none' });

    }

    $(document).on('click', '#back-to-2', function (event) {
        event.preventDefault();
        refreshStepR();
        appQuest2.removeClass('d-none');
        appResult.addClass('d-none');
        question2Results = [];

        $('body').removeClass('show-result-body');

        //empty
        if ($('#question-2').innerHeight() == 0) {
            $('#back-to-1').trigger('click');
        }
    });

    //------------------------------------------------------------------------//

    $(document).on('click', '.tn_lightBoxOverlay, .tn_closeX', function (event) {
        event.preventDefault();
        $('.tn_lightBoxOverlay').addClass('d-none');
        $('.tn_lightBoxWindow').addClass('d-none');
    });

    $(document).on('click', '.link-modal-product', function (event) {
        event.preventDefault();

        $('.button-m-1, .button-m-2, #modal-photo').addClass('d-none');
        $('#modal-photo').removeClass('small-photo');

        if ($(this).parents('.tn_resultsIntroSolutions').length || $(this).parents('.tn_resultsSoftware').length || $(this).parents('.tn_resultsServices').length) {
            $('#modal-photo').addClass('small-photo');
        }

        let productModal = $('.tn_lightBoxWindowProduct');

        $('.tn_lightBoxOverlay').removeClass('d-none');
        productModal.removeClass('d-none');

        let thisParent = $(this).parents('.result-m-data'),
            thisParentMeta = thisParent.find('.result-m-meta'),
            thisthisParentMetaDescription = thisParentMeta.data('description'),
            thisParentMetaButton = thisParentMeta.data('button'),
            thisParentMetaButtonURL = thisParentMeta.data('buttonurl'),
            thisParentMetaButton2 = thisParentMeta.data('button2'),
            thisParentMetaButtonURL2 = thisParentMeta.data('buttonurl2'),
            thisParentMetaTitleM = thisParentMeta.data('titlem'),
            thisParentMetaPhoto = thisParentMeta.data('photo');

        if (thisParentMetaButtonURL && thisParentMetaButton) {
            productModal.find('.button-m-1').removeClass('d-none');
            productModal.find('.button-m-1').text(thisParentMetaButton).attr('href', thisParentMetaButtonURL);
        }

        if (thisParentMetaButtonURL2 && thisParentMetaButton2) {
            productModal.find('.button-m-2').removeClass('d-none');
            productModal.find('.button-m-2').text(thisParentMetaButton2).attr('href', thisParentMetaButtonURL2);
        }

        if (thisParentMetaPhoto) {
            productModal.find('#modal-photo').removeClass('d-none').html('<img src="https://www.cisco.com/c/dam/m/en_us/solutions/enterprise-networks/solution-builder/images/' + thisParentMetaPhoto + '" alt="Product Photo">');
        }

        productModal.find('#modal-title').html(thisParentMetaTitleM);
        productModal.find('#modal-content').html(thisthisParentMetaDescription);

    });

    $(document).on('click', '.modal-answers', function (event) {
        event.preventDefault();
        $('.tn_lightBoxOverlay').removeClass('d-none');
        $('.tn_lightBoxWindowAnswers').removeClass('d-none');
    });

    //------------------------------------------------------------------------//

    $('.tn_answerInfo').each(function (index, el) {
        new Tooltip($(this), {
            placement: 'top',
            title: $(this).find('.tn_toolTip').text(),
            trigger: 'click',
            closeOnClickOutside: true
        });
    });

    //------------------------------------------------------------------------//

    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementsByClassName("canvas")[0];
        anim_container = document.getElementsByClassName("animation_container")[0];
        dom_overlay_container = document.getElementsByClassName("dom_overlay_container")[0];
        var comp = AdobeAn.getComposition("73493C0DD02745DD9E80FACE9D263FCC");
        var lib = comp.getLibrary();
        handleComplete({}, comp);
    }

    function init2() {
        canvas = document.getElementsByClassName("canvas")[1];
        anim_container = document.getElementsByClassName("animation_container")[1];
        dom_overlay_container = document.getElementsByClassName("dom_overlay_container")[1];
        var comp = AdobeAn.getComposition("73493C0DD02745DD9E80FACE9D263FCC");
        var lib = comp.getLibrary();
        handleComplete({}, comp);
    }

    function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        exportRoot = new lib._2433LoadingElement_10();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }

        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = window.innerWidth, ih = window.innerHeight;
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }

                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }

                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }

                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }

                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }

        makeResponsive(false, 'both', false, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }

    init();
    init2();

    //------------------------------------------------------------------------//

    //create PDF file

    $(document).on('click', '.subhead-download a', function (event) {

        event.preventDefault();

        let onePT = 0.0138889,
            pdfLH = 1.5,
            loadImg = [];

        function preloadImages(url) {
            let img = new Image();
            img.onload = function () {
                loadImg.pop(url);
                if (!loadImg.length) {
                    canBuildPDF();
                }
            }

            img.src = url;
            loadImg.push(url);
            return img;
        }

        let imgCisco = preloadImages('https://www.cisco.com/c/dam/m/en_us/solutions/enterprise-networks/solution-builder/images/pdf_cisco.png'),
            imgAssurance = preloadImages('https://www.cisco.com/c/dam/m/en_us/solutions/enterprise-networks/solution-builder/images/results_icon_solution_assurance_solid.png'),
            imgAutomation = preloadImages('https://www.cisco.com/c/dam/m/en_us/solutions/enterprise-networks/solution-builder/images/results_icon_solution_automation_solid.png'),
            imgSDaccess = preloadImages('https://www.cisco.com/c/dam/m/en_us/solutions/enterprise-networks/solution-builder/images/results_icon_solution_sdaccess_solid.png'),
            imgSDwan = preloadImages('https://www.cisco.com/c/dam/m/en_us/solutions/enterprise-networks/solution-builder/images/results_icon_solution_sdwan_solid.png');

        let infrastructurePhotos = [];
        $('.tn_resultsInfrastructure:not(".d-none") .result-m-data').each(function (index, el) {
            let thisImgPush = preloadImages($(el).find('img').attr('src'));
            infrastructurePhotos.push(thisImgPush);
        });

        let appliancePhotos = [];
        $('.tn_resultsAppliance:not(".d-none") .result-m-data').each(function (index, el) {
            let thisImgPush = preloadImages($(el).find('img').attr('src'));
            appliancePhotos.push(thisImgPush);
        });


        function canBuildPDF() {

            // begin functions

            function pdfPrintLine() {
                let thisLineOffset = 0.014;
                pdf.setDrawColor(221, 221, 221);
                pdf.setLineWidth(0.014);
                pdf.line(gapSize, currentOffsetTop + thisLineOffset + 0.1, areaWidth + gapSize, currentOffsetTop + thisLineOffset + 0.1);
                changeOffsetTop(thisLineOffset + 0.2);
            }

            function pdfPrintSeparator(color) {
                let separatorPush = 1.875,
                    separatorHeight = 0.014;

                if (!color) {
                    pdf.setFillColor(153, 153, 153);
                    pdf.rect(gapSize, currentOffsetTop, areaWidth, separatorHeight, 'F');
                    changeOffsetTop(gapSize);
                } else {
                    separatorHeight = 0.04;
                    pdf.setFillColor(30, 68, 113);
                    pdf.rect(gapSize + separatorHeight / 2, currentOffsetTop, areaWidth - separatorHeight, separatorHeight, 'F');
                    pdf.setFillColor(106, 191, 75);
                    pdf.rect(gapSize + separatorHeight / 2, currentOffsetTop, areaWidth - separatorHeight - separatorPush, separatorHeight, 'F');
                    pdf.setFillColor(251, 171, 24);
                    pdf.rect(gapSize + separatorHeight / 2, currentOffsetTop, areaWidth - separatorHeight - separatorPush * 2, separatorHeight, 'F');
                    pdf.setFillColor(0, 188, 235);
                    pdf.rect(gapSize + separatorHeight / 2, currentOffsetTop, areaWidth - separatorHeight - separatorPush * 3, separatorHeight, 'F');

                    pdf.setFillColor(0, 188, 235);
                    pdf.ellipse(gapSize + separatorHeight / 2, currentOffsetTop + separatorHeight / 2 - 0.0007, separatorHeight / 2, separatorHeight / 2, 'F');
                    pdf.setFillColor(30, 68, 113);
                    pdf.ellipse(areaWidth + gapSize - separatorHeight / 2, currentOffsetTop + separatorHeight / 2 - 0.0007, separatorHeight / 2, separatorHeight / 2, 'F');

                    changeOffsetTop(gapSize / 1.5);

                }
            }

            function pdfIfItFits(bufferHeight) {
                let bufferOffsetTop = currentOffsetTop + bufferHeight;
                if (bufferOffsetTop > areaHeight + 0.9) {
                    pdf.addPage();
                    currentOffsetTop = gapSize;
                }
            }

            function pdfPrintSolution(icon, title, total, index) {
                var thisIcon = '';
                thisWidth = areaWidth / total,
                    thisOffset = (thisWidth - 0.8) / 2;
                switch (icon) {
                    case 'results_icon_solution_assurance':
                        thisIcon = imgAssurance;
                        break;
                    case 'results_icon_solution_automation':
                        thisIcon = imgAutomation;
                        break;
                    case 'results_icon_solution_sdaccess':
                        thisIcon = imgSDaccess;
                        break;
                    case 'results_icon_solution_sdwan':
                        thisIcon = imgSDwan;
                        break;
                }
                addImageFromUrl(thisIcon, 'PNG', gapSize + thisWidth * index + thisOffset, currentOffsetTop, 0.8, 0.8);

                var thisTitleResult = pdf.setFontSize(10).splitTextToSize(title, thisWidth);
                thisTitleHeight = thisTitleResult.length * 11 * pdfLH / 72 + 0.05;
                thisTextWidth = pdf.getTextDimensions(title);
                pdf.setTextColor(0, 116, 147);


                pdf.setFont('CiscoSansTTRegular');
                pdf.setFontType('normal');

                var textWidth = pdf.getStringUnitWidth(title) * 11 / pdf.internal.scaleFactor;
                var textOffset = (thisWidth - textWidth) / 2;

                pdf.setFontSize(11).text(gapSize + thisWidth * index + textOffset, currentOffsetTop + 1, thisTitleResult);


                if (index + 1 == total) {
                    changeOffsetTop(1 + thisTitleHeight);
                    pdfPrintSeparator(true);
                }
            }

            function pdfPrintTitle(title, icon) {
                pdf.setFont('CiscoSansTTLight');
                pdf.setFontType('normal');
                if (title) {
                    pdf.setTextColor(76, 76, 76);
                    pdf.setFontSize(16);
                    let thisWidth = areaWidth,
                        thisIconWidth = 0,
                        thisIconGap = 0;
                    if (icon) {
                        thisIconWidth = 0.5;
                        thisWidth = areaWidth - thisIconWidth - 0.125;
                        pdfIfItFits(thisIconWidth);
                        addImageFromUrl(icon, 'PNG', gapSize, currentOffsetTop, thisIconWidth, thisIconWidth);
                        thisIconGap = 0.125;
                    }
                    let thisTitleText = pdf.splitTextToSize(title, thisWidth),
                        thisTitleHeight = thisTitleText.length * 16 * pdfLH / 72;
                    pdfIfItFits(thisTitleHeight);
                    pdf.text(gapSize + thisIconWidth + thisIconGap, currentOffsetTop + 16 * pdfLH / 72 - 0.02, thisTitleText);

                    if (icon && thisTitleHeight < thisIconWidth) {
                        thisTitleHeight = thisIconWidth;
                    }
                    changeOffsetTop(thisTitleHeight + 0.1);
                }
            }

            function changeOffsetTop(value) {
                currentOffsetTop += value;
                if (currentOffsetTop > areaHeight) {
                    pdf.addPage();
                    currentOffsetTop = gapSize;
                }
                return currentOffsetTop;
            }

            let columnsBufferOffsetMaxHeight = 0;

            function pdfPrintItem(thisTitle, thisDescription, thisButton1URL, thisIndex, thisSupTitle, thisSubTitle, thisPhotoObj, thisLength, thisCenter, thisTitleSize) {
                if (thisIndex != 0 && !thisLength) {
                    pdfPrintLine();
                }

                pdf.setFont('CiscoSansTTLight');
                pdf.setFontType('normal');

                let thisBlockHeight = 0,
                    thisInitialOffset = currentOffsetTop;

                thisBlockHeight += 14 * pdfLH / 72;

                changeOffsetTop(thisBlockHeight);

                var titleFontSize = 13;
                if (thisTitleSize) {
                    titleFontSize = thisTitleSize;
                }


                let photoGap = 0,
                    photoRatio = 0,
                    columnWidth = 0;

                if (thisPhotoObj && !thisLength) {
                    photoGap = 2.3;
                    photoRatio = thisPhotoObj.height / thisPhotoObj.width;
                }

                if (thisPhotoObj && thisLength) {
                    photoRatio = thisPhotoObj.height / thisPhotoObj.width;
                }

                let columnsBufferOffset = 0,
                    columnsBufferOffsetMax = 0;

                if (thisIndex != 0 && thisLength) {
                    columnsBufferOffsetMaxHeight = 0;
                }
                if (thisLength) {
                    columnWidth = areaWidth / thisLength;
                    currentOffsetTop = thisInitialOffset;
                }

                let thisSupTitleHeight = 0,
                    thisSupTitleResult = '';
                if (thisSupTitle) {
                    thisSupTitleResult = pdf.setFontSize(10).splitTextToSize(thisSupTitle, areaWidth / thisLength - photoGap);
                    thisSupTitleHeight = thisSupTitleResult.length * 10 * pdfLH / 72 + 0.05;
                    thisBlockHeight += thisSupTitleHeight;
                }

                let thisSubTitleHeight = 0,
                    thisSubTitleResult = '';
                if (thisSubTitle) {
                    thisSubTitleResult = pdf.setFontSize(10).splitTextToSize(thisSubTitle, areaWidth / thisLength - photoGap);
                    thisSubTitleHeight = thisSubTitleResult.length * 10 * pdfLH / 72 + 0.05;
                    thisBlockHeight += thisSubTitleHeight;
                }

                pdf.setFont('CiscoSansTTRegular');
                pdf.setFontType('normal');

                let thisTitleResult = pdf.setFontSize(titleFontSize).splitTextToSize(thisTitle, areaWidth / thisLength - photoGap);
                let thisTitleHeight = thisTitleResult.length * titleFontSize * pdfLH / 72;
                thisBlockHeight += thisTitleHeight;

                pdf.setFont('CiscoSansTTLight');
                pdf.setFontType('normal');

                let thisDescriptionHeight = 0,
                    thisDescriptionResult = '';
                if (thisDescription) {
                    thisDescriptionResult = pdf.setFontSize(10).splitTextToSize(thisDescription, areaWidth - photoGap);
                    thisDescriptionHeight = thisDescriptionResult.length * 10 * pdfLH / 72;
                    thisBlockHeight += thisDescriptionHeight;
                }

                let imageHeightDiff = 0;
                if (thisBlockHeight < 1.875 * photoRatio + titleFontSize * pdfLH / 72) {
                    imageHeightDiff = 1.875 * photoRatio + titleFontSize * pdfLH / 72 - thisBlockHeight;
                    thisBlockHeight = 1.875 * photoRatio + titleFontSize * pdfLH / 72;
                }

                pdfIfItFits(thisBlockHeight);

                if (thisPhotoObj) {
                    if (!thisLength) {
                        addImageFromUrl(thisPhotoObj, 'PNG', gapSize + columnWidth * thisIndex, currentOffsetTop, 1.875, 1.875 * photoRatio);
                    } else {
                        var thisCenterImgOffset = 0;
                        if (thisCenter) {
                            thisCenterImgOffset = (columnWidth - 1.2) / 2;
                        }
                        addImageFromUrl(thisPhotoObj, 'PNG', gapSize + columnWidth * thisIndex + thisCenterImgOffset, currentOffsetTop, 1.2, 1.2 * photoRatio);
                        columnsBufferOffset += 1.2 * photoRatio + 0.3;
                        columnsBufferOffsetMax += 1.2 * photoRatio + 0.3;
                    }
                }

                if (thisSupTitle) {
                    pdf.setTextColor(76, 76, 76);
                    if (thisCenter) {
                        pdf.setFontSize(11).text(thisSupTitleResult, gapSize + columnWidth * thisIndex + columnWidth / 2, currentOffsetTop + columnsBufferOffset, 'center');
                    } else {
                        pdf.setFontSize(11).text(gapSize + photoGap + columnWidth * thisIndex, currentOffsetTop + columnsBufferOffset, thisSupTitleResult);
                    }

                    if (!thisLength) {
                        changeOffsetTop(thisSupTitleHeight);
                    } else {
                        columnsBufferOffset += thisSupTitleHeight;
                        columnsBufferOffsetMax += thisSupTitleHeight;
                    }
                }

                pdf.setTextColor(0, 116, 147);

                pdf.setFont('CiscoSansTTRegular');
                pdf.setFontType('normal');
                if (thisCenter) {
                    pdf.setFontSize(titleFontSize).text(thisTitleResult, gapSize + columnWidth * thisIndex + columnWidth / 2, currentOffsetTop + columnsBufferOffset, 'center');
                } else {
                    pdf.setFontSize(titleFontSize).text(gapSize + photoGap + columnWidth * thisIndex, currentOffsetTop + columnsBufferOffset, thisTitleResult);
                }
                pdf.setFont('CiscoSansTTLight');
                pdf.setFontType('normal');

                if (!thisLength) {
                    changeOffsetTop(thisTitleHeight);
                } else {
                    columnsBufferOffset += thisTitleHeight;
                    columnsBufferOffsetMax += thisTitleHeight;
                }

                if (thisSubTitle) {
                    pdf.setTextColor(76, 76, 76);
                    if (thisCenter) {
                        thisSubTitleCenter = pdf.getStringUnitWidth(thisSubTitle) * 10 / pdf.internal.scaleFactor;
                        thisSubTitleCenter = (columnWidth - thisSubTitleCenter) / 2 - 10 / 320;
                    }

                    if (thisCenter) {
                        pdf.setFontSize(10).text(thisSubTitleResult, gapSize + columnWidth * thisIndex + columnWidth / 2, currentOffsetTop + columnsBufferOffset, 'center');
                    } else {
                        pdf.setFontSize(10).text(gapSize + photoGap + columnWidth * thisIndex, currentOffsetTop + columnsBufferOffset, thisSubTitleResult);
                    }
                    if (!thisLength) {
                        changeOffsetTop(thisSubTitleHeight);
                    } else {
                        columnsBufferOffset += thisSubTitleHeight;
                        columnsBufferOffsetMax += thisSubTitleHeight;
                    }
                }

                if (thisDescription) {
                    pdf.setTextColor(76, 76, 76);
                    pdf.setFontSize(10).text(gapSize + photoGap + columnWidth * thisIndex, currentOffsetTop + columnsBufferOffset, thisDescriptionResult);
                    if (!thisLength) {
                        changeOffsetTop(thisDescriptionHeight);
                    } else {
                        columnsBufferOffset += thisDescriptionHeight;
                        columnsBufferOffsetMax += thisDescriptionHeight;
                    }

                }

                if (!thisLength) {
                    changeOffsetTop(imageHeightDiff);
                }

                if (columnsBufferOffsetMax > columnsBufferOffsetMaxHeight) {
                    columnsBufferOffsetMaxHeight = columnsBufferOffsetMax;
                }

                if (thisLength - 1 == thisIndex) {
                    changeOffsetTop(columnsBufferOffsetMaxHeight);
                }

            }

            function pdfPrintText(thisString, thisSize, thisColor) {
                pdf.setFont('CiscoSansTTLight');
                pdf.setFontType('normal');
                thisString.find('p').each(function (index, el) {
                    pdf.setTextColor(76, 76, 76);
                    if (thisColor == 'gray') {
                        pdf.setTextColor(169, 169, 169);
                    }
                    let thisParagraph = pdf.setFontSize(thisSize).splitTextToSize($(el).text(), areaWidth);
                    let thisParagraphHeight = thisParagraph.length * thisSize * pdfLH / 72;
                    pdfIfItFits(thisParagraphHeight);
                    pdf.text(gapSize, currentOffsetTop + thisSize * pdfLH / 72, thisParagraph);
                    changeOffsetTop(thisParagraphHeight + 0.05);
                });
            }
            // end functions

            //------------------------------------------------------------------------//

            let addImageFromUrl = function (img, extension, x, y, w, h) {
                pdf.addImage(img, extension, x, y, w, h);
            }

            let pdf = new jsPDF({ orientation: 'p', unit: 'in', format: 'letter', lineHeight: pdfLH }),
                fullWidth = 8.5,
                areaWidth = 7.5,
                fullHeight = 11,
                areaHeight = 10,
                gapSize = 0.5,
                currentOffsetTop = gapSize;

            let logoSize = 0.451;

            let ciscoLogoWidth = 0.847,
                ciscoLogoHeight = 0.451;
            addImageFromUrl(imgCisco, 'PNG', fullWidth - ciscoLogoWidth - gapSize, gapSize, ciscoLogoWidth, ciscoLogoHeight);

            pdf.setTextColor(76, 76, 76);
            pdf.setFont('CiscoSansTTLight');
            pdf.setFontType('normal');
            pdf.setFontSize(22);

            let titleOffsetTop = gapSize + logoSize / 2 + 0.05 + 26 * onePT * (pdfLH - 1) / 2;
            pdf.text(gapSize, titleOffsetTop, $('#header-title').text());

            changeOffsetTop(logoSize + gapSize);

            pdf.setTextColor(76, 76, 76);

            let thisIntroText = $('.tn_resultsIntro');
            //console.log(thisIntroText);
            thisIntroText.find('span.d-none').remove();
            thisIntroText = thisIntroText.text().replace('  ', ' ');
            let thisSolution = pdf.setFontSize(12).splitTextToSize(thisIntroText, areaWidth);

            let thisSolutionHeight = thisSolution.length * 12 * pdfLH / 72;
            pdf.setFontSize(12).text(gapSize, currentOffsetTop, thisSolution);
            changeOffsetTop(thisSolutionHeight + 0.2);

            var resultsIntroSolutionsLength = $('.tn_resultsIntroSolutions .link-modal-product').length;
            $('.tn_resultsIntroSolutions .link-modal-product').each(function (index, el) {
                var thisElement = $(this);
                thisImgUrl = thisElement.find('img').data('src').replace(/\.[^/.]+$/, ""),
                    thisText = thisElement.text();

                // console.log(thisImgUrl);

                pdfPrintSolution(thisImgUrl, thisText, resultsIntroSolutionsLength, index);

            });

            let thisResultsSoftwareLength = $('.tn_resultsSoftware:not(".d-none") .result-m-meta').length;
            if (thisResultsSoftwareLength) {
                // pdfPrintSeparator();
                pdfPrintTitle(Results_SEC1_Name, false);
                pdfPrintText($('#r1-intro'), 10, false);
                changeOffsetTop(0.1);
                pdfPrintLine();
                changeOffsetTop(0.3);
                $('.tn_resultsSoftware:not(".d-none") .result-m-meta').each(function (index, el) {
                    let thisElement = $(el),
                        thisTitle = thisElement.parents('.result-m-data').find('h3').text(),
                        thisDescription = thisElement.data('description'),
                        thisButton1URL = thisElement.data('buttonurl'),
                        thisSupTitle = thisElement.parents('.result-m-data').find('.tn_resultsArrayCategory').text();
                    pdfPrintItem(thisTitle, false, thisButton1URL, index, false, thisSupTitle, false, thisResultsSoftwareLength, true);
                });
                pdfPrintLine();
                pdfPrintText($('#r1-disclaim'), 8, false);
                changeOffsetTop(gapSize / 1.5);
            }

            if ($('.tn_resultsAppliance:not(".d-none") .result-m-meta').length) {
                pdfPrintSeparator();
                pdfPrintTitle(Results_SEC2_Name, false);
                $('.tn_resultsAppliance:not(".d-none") .result-m-meta').each(function (index, el) {
                    let thisElement = $(el),
                        thisTitle = thisElement.parents('.result-m-data').find('h3').text(),
                        thisDescription = thisElement.prev('.tn_resultsApplianceText').find('p').text(),
                        thisButton1URL = thisElement.data('buttonurl'),
                        thisPhoto = appliancePhotos[index];
                    pdfPrintItem(thisTitle, thisDescription, thisButton1URL, index, false, false, thisPhoto);
                });
                changeOffsetTop(gapSize / 1.5);
            }

            let thisResultsInfrastructureLength = $('.tn_resultsInfrastructure:not(".d-none") .result-m-meta').length;
            if (thisResultsInfrastructureLength) {
                pdfPrintSeparator();
                pdfPrintTitle(Results_SEC3_Name, false);
                changeOffsetTop(0.15);
                $('.tn_resultsInfrastructure:not(".d-none") .result-m-meta').each(function (index, el) {
                    let thisElement = $(el),
                        thisTitle = thisElement.parents('.result-m-data').find('.tn_resultsArrayProduct').text(),
                        thisDescription = thisElement.data('description'),
                        thisButton1URL = thisElement.data('buttonurl'),
                        thisSupTitle = thisElement.parents('.result-m-data').find('.tn_resultsArrayCategory').text(),
                        thisPhoto = infrastructurePhotos[index];
                    pdfPrintItem(thisTitle, false, thisButton1URL, index, thisSupTitle, false, thisPhoto, thisResultsInfrastructureLength, true, 11);
                });
                changeOffsetTop(0.1);
                pdfPrintLine();
                pdfPrintText($('#r3-disclaim'), 8, false);
                changeOffsetTop(gapSize / 1.5);
            }

            if ($('.tn_resultsServices:not(".d-none") .result-m-meta').length) {
                pdfPrintSeparator();
                pdfPrintTitle(Results_SEC4_Name, false);
                $('.tn_resultsServices:not(".d-none") .result-m-meta').each(function (index, el) {
                    let thisElement = $(el),
                        thisTitle = thisElement.parents('.result-m-data').find('h3').text(),
                        thisDescription = thisElement.next('.result-m-description').text(),
                        thisButton1URL = thisElement.data('buttonurl');
                    pdfPrintItem(thisTitle, thisDescription, thisButton1URL, index, false, false, false);
                });
                changeOffsetTop(gapSize / 1.5);
            }

            pdf.setFont('CiscoSansTTExtraLight');
            pdf.setFontType('normal');

            pdfPrintText($('#pdfFooter'), 6, 'gray');

            //pdf.save();
            pdf.output('save', 'Cisco_DNA_Solution_Builder_Recommendations.pdf');

            //debug PDF
            // setTimeout(function(){
            //     let data = pdf.output('datauri');
            //     $('.test-iframe').attr('src', data);
            // }, 500);
        }

    });

    //------------------------------------------------------------------------//

    //trackEvent checkbox
    $(document).on('change', '.tn_checkbox', function (event) {
        var thisCheckbox = $(this);
        thisStatus = 'checked';
        if (!thisCheckbox.prop('checked')) {
            thisStatus = 'unchecked';
        }
        trackEvent.event("link", {
            "lpos": thisStatus,
            "lid": thisCheckbox.attr('id'),
            "linktext": thisCheckbox.parents('.tn_answer').find('.tn_answerText label').text()
        });
    });

    //trackEvent modal buttons
    $(document).on('click', '.button-m-1, .button-m-2', function (event) {
        var thisText = $(this).text(),
            thisTitleText = $(this).parents('.tn_lightBoxProductContent').find('h3').text();
        trackEvent.event("link", {
            "lpos": thisText + ' (' + thisTitleText + ')',
            "lid": $(this).attr('id'),
            "linktext": thisTitleText
        });
    });

    //trackEvent modal links
    $(document).on('click', '.link-modal-product, .modal-answers', function (event) {
        var thisText = $(this).text();
        trackEvent.event("link", {
            "lpos": thisText + ' (open modal)',
            "lid": 'none',
            "linktext": thisText
        });
    });

    //trackEvent menu links
    $(document).on('click', '#drop-menu a', function (event) {
        var thisText = $(this).text();
        trackEvent.event("link", {
            "lpos": thisText,
            "lid": 'none',
            "linktext": thisText
        });
    });

    //trackEvent tooltips
    $(document).on('click', '.tn_answerInfo a', function (event) {
        var thisText = $(this).parents('.tn_answerText').find('label').text();
        trackEvent.event("link", {
            "lpos": 'tooltip',
            "lid": 'none',
            "linktext": thisText
        });
    });

    //------------------------------------------------------------------------//

    $('.splash-menu-assurance a').text(Splash_Assurance);
    $('.splash-menu-automation a').text(Splash_Automation);
    $('.splash-menu-sd-access a').text(Splash_SDAccess);
    $('.splash-menu-sd-wan a').text(Splash_SDWAN);
    $('.splash-menu-all a').text(Splash_all);



    if (window.location.hash && window.location.hash != '#all') {
        changeSolutionType(window.location.hash);
    } else {
        changeSolutionType(false);
    }

    // function hashHandler() {
    //     if( window.location.hash && window.location.hash != '#all' ) {
    //         changeSolutionType(window.location.hash);
    //     } else {
    //         changeSolutionType(false);
    //     }
    // }
    // window.addEventListener('hashchange', hashHandler, false);

    var animationState = false;

    $(document).on('click', '.tn_splashSingleMenu li:not(".singleMenuSelected") a', function (event) {
        if (!animationState) {
            $(this)
                .parents('li')
                .addClass('singleMenuSelected')
                .siblings('li')
                .removeClass('singleMenuSelected');
            changeSolutionType($(this).attr('href'));
        } else {
            event.preventDefault();
        }
        animationState = true;
    });

    function changeSolutionType(hashValue) {
        if (hashValue && hashValue != '#all') {
            var hashText = hashValue.replace('#', '');
            $('li.splash-menu-' + hashText)
                .addClass('singleMenuSelected')
                .siblings('li')
                .removeClass('singleMenuSelected');

            var hashTextTitle = '';
            var splashSingleIcon = $('.tn_splashSingleIcon img'),
                splashSingleIconSrc = splashSingleIcon.attr('src');
            var splashSingleIconRemove = splashSingleIconSrc.substring(splashSingleIconSrc.lastIndexOf('/') + 1);
            splashSingleIconSrc = splashSingleIconSrc.replace(splashSingleIconRemove, '');

            $('.tn_splashMultiple_content').hide();
            $('.tn_splashSingle_content').hide();

            switch (hashText) {
                case 'assurance':
                    hashTextTitle = Splash_Assurance;
                    splashSingleIconSrc = splashSingleIconSrc + 'results_icon_solution_assurance.png';
                    $('.splash-text').html(Splash_Text + Splash_Text2Assurance);
                    $('body').removeClass('show-automation show-sd-access show-all show-sd-wan');
                    $('.loader2').fadeIn('300', function () {
                        $('.tn_splashSingle_content').hide();
                        $('.loader2').fadeOut('100', function () {
                            $('body').addClass('show-assurance');
                            $('.tn_splashSingle_content').show();
                            animationState = false;
                        });
                    });
                    UpTo = UpTo_Assurance;
                    break;
                case 'automation':
                    hashTextTitle = Splash_Automation;
                    splashSingleIconSrc = splashSingleIconSrc + 'results_icon_solution_automation.png';
                    $('.splash-text').html(Splash_Text + Splash_Text2Automation);
                    $('body').removeClass('show-assurance show-sd-access show-all show-sd-wan');
                    $('.loader2').fadeIn('300', function () {
                        $('.tn_splashSingle_content').hide();
                        $('.loader2').fadeOut('100', function () {
                            $('body').addClass('show-automation');
                            $('.tn_splashSingle_content').show();
                            animationState = false;
                        });
                    });
                    UpTo = UpTo_Automation;
                    break;
                case 'sd-access':
                    hashTextTitle = Splash_SDAccess;
                    splashSingleIconSrc = splashSingleIconSrc + 'results_icon_solution_sdaccess.png';
                    $('.splash-text').html(Splash_Text + Splash_Text2SDAccess);
                    $('body').removeClass('show-assurance show-automation show-all show-sd-wan');
                    $('.loader2').fadeIn('300', function () {
                        $('.tn_splashSingle_content').hide();
                        $('.loader2').fadeOut('100', function () {
                            $('body').addClass('show-sd-access');
                            $('.tn_splashSingle_content').show();
                            animationState = false;
                        });
                    });
                    UpTo = UpTo_SDAccess;
                    break;
                case 'sd-wan':
                    hashTextTitle = Splash_SDWAN;
                    splashSingleIconSrc = splashSingleIconSrc + 'results_icon_solution_sdwan.png';
                    $('.splash-text').html(Splash_Text + Splash_Text2SDWAN);
                    $('body').removeClass('show-assurance show-automation show-sd-access show-all');
                    $('.loader2').fadeIn('300', function () {
                        $('.tn_splashSingle_content').hide();
                        $('.loader2').fadeOut('100', function () {
                            $('body').addClass('show-sd-wan');
                            $('.tn_splashSingle_content').show();
                            animationState = false;
                        });
                    });
                    UpTo = UpTo_SDWAN;
                    break;
            }

            splashSingleIcon.attr('src', splashSingleIconSrc);

            $('#splash-title').text(Splash_Title + ' ' + Splash_TitlePrefix + ' ' + hashTextTitle);
            //console.log(hashText);
            $('#header-title').text(Splash_Title + ' ' + Splash_TitlePrefix + ' ' + hashTextTitle);
            $('#question-step-1-title').text(Q1_Text + ' ' + UpTo + ' ' + Q1_Text2);
        } else {

            $('#header-title').text(Header_Title);
            $('#splash-title').text(Splash_Title);
            $('.splash-text').html(Splash_Text + Splash_Text2);
            $('.tn_splashMultiple_content').hide();
            $('.tn_splashSingle_content').hide();

            $('body').removeClass('show-assurance show-automation show-sd-access show-sd-wan');
            $('.loader2').fadeIn('300', function () {
                $('.tn_splashMultiple_content').hide();
                $('.loader2').fadeOut('100', function () {
                    $('body').addClass('show-all');
                    $('.tn_splashMultiple_content').show();
                    animationState = false;
                });
            });

            UpTo = 5;

            $('#question-step-1-title').text(Q1_Text + ' ' + UpTo + ' ' + Q1_Text2);

            //console.log(hashValue);
        }
    }

}); //DOMContentLoaded