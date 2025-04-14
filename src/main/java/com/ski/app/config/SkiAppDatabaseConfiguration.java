package com.ski.app.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

@Configuration
@ComponentScan("com.ski.app.repository")
public class SkiAppDatabaseConfiguration extends DataSourceAutoConfiguration {

    @Bean
    @ConfigurationProperties("spring.skiapp-datasource")
    public DataSourceProperties skiAppDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource skiAppDataSource() {
        return skiAppDataSourceProperties().initializeDataSourceBuilder().build();
    }

    @Bean
    public JdbcTemplate skiAppJdbcTemplate(@Qualifier("skiAppDataSource") DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }
}
