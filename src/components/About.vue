<template>
    <section class="section flex items-center justify-center flex-col">
        <!-- About -->
        <div class="mt-10">
            <h2 class="text-4xl font-bold text-center mb-10">About</h2>

            <div class="flex flex-col justify-center items-center sm:items-start sm:flex-row">
                <img src="/id-picture.jpg" class="w-[90%] mb-5 sm:w-[40%] sm:mr-7 sm:max-w-80 rounded-md">
                <div class="w-[80%] flex-col">
                    <p class="text-3xl font-bold my-3">김채민 <span class="text-xl">웹 개발자(BE, FE)</span></p>
                    <p class="mb-3">소통이 잘 되는 개발자, 함께 일하고 싶은 개발자가 되기위해 노력합니다.</p>
                    <p class="mb-3"> <span class="font-bold">연락처:</span> 010-9559-1750</p>
                    <p class="mb-3"><span class="font-bold">생년월일:</span> 00.06.17</p>
                    <p class="mb-3"><span class="font-bold">이메일:</span> dktjdej@naver.com</p>
                    <p class="mb-3"><span class="font-bold">깃허브 주소:</span><a href="https://github.com/aleph-kim"
                            target="_blank"> https://github.com/aleph-kim</a></p>
                    <p class="mb-3"><span class="font-bold">블로그 주소:</span><a href="https://dev-kimchi.tistory.com"
                            target="_blank"> https://dev-kimchi.tistory.com</a></p>
                </div>
            </div>
        </div>

        <!-- Skills -->
        <div class="mt-40">
            <h2 class="text-4xl font-bold text-center mb-10">Skills</h2>

            <div class="flex flex-col ml-3">
                <div class="mb-5">
                    <h3 class="text-xl mb-2 font-bold">Backend</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-600 text-white px-3 py-1 rounded-xl">PHP</span>
                        <span class="bg-[#E64122] text-white px-3 py-1 rounded-xl">Laravel</span>
                        <span class="bg-[#3EADD1] text-white px-3 py-1 rounded-xl">Yii Framework</span>
                        <span class="bg-[#E64122] text-white px-3 py-1 rounded-xl">CodeIgniter</span>
                        <span class="bg-blue-500 text-white px-3 py-1 rounded-xl">Java</span>
                        <span class="bg-green-500 text-white px-3 py-1 rounded-xl">Spring Boot</span>
                        <span class="bg-[#649F55] text-white px-3 py-1 rounded-xl">Node.js</span>
                        <span class="bg-black text-white px-3 py-1 rounded-xl">Express.js</span>
                        <span class="bg-[#4C7B9C] text-white px-3 py-1 rounded-xl">Mysql</span>
                    </div>
                </div>

                <div class="mb-5">
                    <h3 class="text-xl mb-2 font-bold"> Frontend</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-red-500 text-white px-3 py-1 rounded-xl">HTML</span>
                        <span class="bg-blue-500 text-white px-3 py-1 rounded-xl">CSS</span>
                        <span class="bg-teal-400 text-white px-3 py-1 rounded-xl">Tailwind CSS</span>
                        <span class="bg-teal-500 text-white px-3 py-1 rounded-xl">Daisy UI</span>
                        <span class="bg-yellow-500 text-white px-3 py-1 rounded-xl">JavaScript</span>
                        <span class="bg-blue-700 text-white px-3 py-1 rounded-xl">jQuery</span>
                        <span class="bg-green-600 text-white px-3 py-1 rounded-xl">Vue.js</span>
                    </div>
                </div>

                <div class="mb-5">
                    <h3 class="text-xl mb-2 font-bold">DevOps</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-orange-500 text-white px-3 py-1 rounded-xl">AWS</span>
                        <span class="bg-blue-600 text-white px-3 py-1 rounded-xl">GCP</span>
                        <span class="bg-indigo-600 text-white px-3 py-1 rounded-xl">Docker</span>
                        <span class="bg-[#CC3631] text-white px-3 py-1 rounded-xl">Jenkins</span>
                        <span class="bg-green-600 text-white px-3 py-1 rounded-xl">Nginx</span>
                        <span class="bg-gray-800 text-white px-3 py-1 rounded-xl">GitHub</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutSkillsSection',
};
</script>