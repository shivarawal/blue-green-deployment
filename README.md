# Blue-Green Deployment Platform

## Project Overview

This project demonstrates a production-style Blue-Green Deployment strategy using Kubernetes, Docker, GitHub Actions, and DevOps best practices.

The goal is to deploy a new application version (Green) alongside the currently running version (Blue), validate the new release, and switch traffic with zero downtime.



## Technologies Used

* Linux
* Git & GitHub
* GitHub Actions
* Docker
* Docker Hub
* Kubernetes (kubeadm)
* Node.js
* Trivy Security Scanner



## Architecture

Developer Push → GitHub → GitHub Actions → Docker Build → Trivy Scan → Docker Hub → Kubernetes Green Deployment → Health Check → Traffic Switch

## Features Implemented

### Blue-Green Deployment

* Blue Deployment (v1)
* Green Deployment (v2)
* Traffic switching using Kubernetes Service selector
* Zero-downtime deployment

### CI/CD Pipeline

* Source code checkout
* Dependency installation
* Automated testing
* Docker image build
* Docker image push
* Kubernetes deployment automation

### Security

* Trivy filesystem scan
* Trivy container image scan

### Kubernetes Reliability

* Liveness Probe
* Readiness Probe
* ConfigMap
* Secret
* ResourceQuota
* LimitRange
* PodDisruptionBudget


## Kubernetes Resources

### Deployments

* blue-deployment
* green-deployment

### Service

* blue-green-service

### Configuration

* ConfigMap
* Secret

### Reliability

* PodDisruptionBudget
* ResourceQuota
* LimitRange



## Blue-Green Deployment Workflow

1. Blue version serves production traffic.
2. New image is built and pushed to Docker Hub.
3. Green deployment is updated with the new image.
4. Health checks validate Green pods.
5. Service selector switches traffic from Blue to Green.
6. Rollback can be performed if validation fails.

## Project Structure

blue-green-deployment/
├── app.js
├── package.json
├── Dockerfile
├── configmap.yaml
├── secret.yaml
├── k8s/
│   ├── blue-deployment.yaml
│   ├── green-deployment.yaml
│   ├── service.yaml
│   ├── pdb.yaml
│   ├── resourcequota.yaml
│   └── limitrange.yaml
└── .github/
    └── workflows/
        └── blue-green.yaml


## Author

Shiva Rawal

DevOps Engineer | Kubernetes | Docker | GitHub Actions | Terraform | Monitoring


Workflow rerun test - Mon Jun 22 05:16:24 PM IST 2026
