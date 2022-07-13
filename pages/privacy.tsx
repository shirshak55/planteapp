import Hero from "../components/Hero"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"


export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'hero', 'socialmedia', 'nav', 'privacy']))
        }
    }
}
// don&apos;t rename it to privacy policy as adblock like ublock seems to block it

export default function PrivacyPolicy() {
    const { t } = useTranslation()
    return (
        <>
            <div className="h-full w-full flex justify-center items-center m-8">
                <div className=" c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden p-8">
                    {/*<h1 className="text-2xl font-bold">Privacy Policy for Plante</h1>*/}
                    <h1 className="text-2xl font-bold">{t('privacy:title_str')}</h1>
                    <p>{t('privacy:p_1')}</p>

                    <p>
                        {t('privacy:p_2')}
                    </p>

                    <p>
                        {t('privacy:p_3')}
                        <a href="https://www.privacypolicygenerator.info">{t('privacy:a_1')}</a>.
                    </p>

                    <h2>{t('privacy:title_2')}</h2>

                    <p>{t('privacy:p_4')}</p>

                    <h2>{t('privacy:Information_we_collect')}</h2>

                    <p>
                        {t('privacy:p_6')}
                    </p>
                    <p>
                        {t('privacy:p_7')}
                    </p>
                    <p>
                        {t('privacy:p_8')}
                    </p>

                    <h2>{t('privacy:how_we_use_your_information')}</h2>

                    <p>{t('privacy:p_9')}</p>

                    <ul className="list-disc">
                        <li>{t('privacy:li_1')}</li>
                        <li>{t('privacy:li_2')}</li>
                        <li>{t('privacy:li_3')}</li>
                        <li>{t('privacy:li_4')}</li>
                        <li>
                            {t('privacy:li_5')}
                        </li>
                        <li>{t('privacy:li_6')}</li>
                        <li>{t('privacy:li_7')}</li>
                    </ul>

                    <h2 className="font-semibold">{t('privacy:log_files')}</h2>

                    <p>
                        {t('privacy:p_10')}
                    </p>

                    <h2>{t('privacy:advertising_partners_privacy_policies')}</h2>

                    <p>
                        {t('privacy:p_11')}
                    </p>

                    <p>
                        {t('privacy:p_12')}
                    </p>

                    <p>
                        {t('privacy:p_13')}
                    </p>

                    <h2>{t('privacy:third_party_privacy_policies')}</h2>

                    <p>
                        {t('privacy:p_14')}
                    </p>

                    <p>
                        {t('privacy:p_15')}
                    </p>

                    <h2>{t('privacy:ccpa')}</h2>

                    <p>{t('privacy:p_16')}</p>
                    <p>
                        {t('privacy:p_17')}
                    </p>
                    <p>
                        {t('privacy:p_18')}
                    </p>
                    <p>
                        {t('privacy:p_19')}
                    </p>
                    <p>
                        {t('privacy:p_20')}
                    </p>

                    <h2>{t('privacy:gdpr')}</h2>

                    <p>
                        {t('privacy:p_21')}
                    </p>
                    <p>
                        {t('privacy:p_22')}
                    </p>
                    <p>
                        {t('privacy:p_23')}
                    </p>
                    <p>
                        {t('privacy:p_25')}
                    </p>
                    <p>
                        {t('privacy:p_26')}
                    </p>
                    <p>
                        {t('privacy:p_27')}
                    </p>
                    <p>
                        {t('privacy:p_28')}
                    </p>
                    <p>
                        {t('privacy:p_29')}
                    </p>

                    <h2>{t('privacy:children_info')}</h2>

                    <p>
                        {t('privacy:p_30')}
                    </p>

                    <p>
                        {t('privacy:p_31')}
                    </p>
                </div>
            </div>
        </>
    )
}
