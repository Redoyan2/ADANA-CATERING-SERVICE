import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className='w-50 mx-5'>
                <h1>Authentication vs. Authorization</h1>
                <div>
                    <h2>Authentication</h2>
                    <li>Authentication verifies who the user is.</li>
                    <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                    <li>Authentication is the first step of a good identity and access management process.</li>
                    <li>Authentication is visible to and partially changeable by the user.</li>
                    <li>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</li>
                </div>
                <div>
                    <h2>Authorizaton</h2>
                    <li>Authorization determines what resources a user can access.</li>
                    <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                    <li>Authorization always takes place after authentication.</li>
                    <li>Authorization isn’t visible to or changeable by the user.</li>
                    <li>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</li>
                </div>
                <div>
                    <h2>Uses of Firebase</h2>
                    <p>
                        Google Firebase offers many features that pitch it as the go-to backend development
                        tool for web and mobile apps. It reduces
                        development workload and time. And it's a perfect prototyping tool.
                        Firebase is simple, lightweight, friendly, and industrially recognized.
                    </p>
                    <h2>Other services</h2>
                    <p>Most apps need to know the identity of a user. Knowing a user's identity
                        allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to
                        authenticate users to your app. It supports authentication using passwords, phone numbers, popular
                        federated identity providers like Google, Facebook and Twitter, and more.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;