import './Banner.css'

export function Banner({status = "info", title, children}) {
    const isMultiline = title && children;
    return (
        <div className={`banner banner_status_${status} ${isMultiline ? 'banner-multiline' : 'banner-singleline'}`} 
            role="alert">
                <div className="banner_content" >
                    {title && <h2 className="banner_title">{title}</h2>}
                    {children && <div className="banner_message">{children}</div>}
                </div>
        </div>
    )   
}