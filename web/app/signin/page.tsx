'use client'
import { useSearchParams } from 'next/navigation'
import OneMoreStep from './oneMoreStep'
import NormalForm from './normalForm'

const SignIn = () => {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')

<<<<<<< HEAD
  useEffect(() => {
    getEnterpriseFeatures().then((res) => {
      setEnterpriseFeatures(res)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      {!IS_CE_EDITION && (
        <>
          <Script strategy="beforeInteractive" async src={'https://www.googletagmanager.com/gtag/js?id=AW-11217955271'}></Script>
          <Script
            id="ga-monitor-register"
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer2 = window.dataLayer2 || [];
function gtag(){dataLayer2.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-11217955271"');
        `,
            }}
          >
          </Script>
        </>
      )}
      <div className={cn(
        style.background,
        'flex w-full min-h-screen',
        'sm:p-4 lg:p-8',
        'gap-x-20',
        'justify-center lg:justify-start',
      )}>
        <div className={
          cn(
            'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
            'space-between',
          )
        }>
          <Header />

          {loading && (
            <div className={
              cn(
                'flex flex-col items-center w-full grow items-center justify-center',
                'px-6',
                'md:px-[108px]',
              )
            }>
              <Loading type='area' />
            </div>
          )}

          {!loading && !enterpriseFeatures.sso_enforced_for_signin && (
            <>
              <Forms />
              <div className='px-8 py-6 text-sm font-normal text-gray-500'>
                © {new Date().getFullYear()}  小兔科技.备案号：沪ICP备15005541号-2
              </div>
            </>
          )}

          {!loading && enterpriseFeatures.sso_enforced_for_signin && (
            <EnterpriseSSOForm protocol={enterpriseFeatures.sso_enforced_for_signin_protocol} />
          )}
        </div>

      </div>

    </>
  )
=======
  if (step === 'next')
    return <OneMoreStep />
  return <NormalForm />
>>>>>>> 8b16f07eb0df69d42a5eed47ebcf1e9ef982a881
}

export default SignIn
